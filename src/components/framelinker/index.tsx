import styles from './style.module.css';
import QRCode from 'qrcode.react';
import { useContext, useEffect, useState } from 'react';
import { generateFrameCode, getTokenFromCode } from 'api';
import { Bounce } from 'react-awesome-reveal';
import { delay } from 'utils/delay';
import { ReactComponent as ResetSVG } from 'assets/reset.svg';
import { AuthContext } from 'auth';
import { useLocation, useNavigate } from 'react-router-dom';


function FrameLinker () {
	const navigate = useNavigate();
	const location = useLocation();
	
	const from = (location.state as any)?.from?.pathname || '/';	
	const { token, linkFrame } = useContext(AuthContext);
	const [code, setCode] = useState('');	
	const [ isExpired, setIsExpired ] = useState(false);
	const [ visible, setVisible ] = useState(true);
	

	let expireTime: any;

	async function getCodeAsync() {
		let data;
		for (;;) {
			const res = await generateFrameCode();
			if (res.success) {
				data = res.data;
				break;
			}
			await delay(1000);
		}
		const { code, timeout } = data;		
		setVisible(true);
		expireTime = Date.now() + timeout;
		return code;
	}

	async function getTokenAsync(code: string) {
		let data;
		for (;;) {			
			const res = await getTokenFromCode(code);
			
			if (res.success) {
				data = res.data;
				break;
			}
			
			if (Date.now() >= expireTime) {
				setIsExpired(true);
				return;
			}
			await delay(1000);
		}
		const { token } = data;
		setVisible(false);
		return token;
	}

	async function reset() {
		const code = await getCodeAsync();
		setCode(code);		
		const token = await getTokenAsync(code);
		if (token != undefined) {
			linkFrame(token, () => {
				navigate(from, { replace: true});
			});
		}
	}

	function onReset() {		
		setIsExpired(false);
		reset();
	}

	useEffect(() => {
		if (token != null) {
			navigate(from);
		} else {
			reset();
		}
	}, []);

	if (visible) {
		return (
			<Bounce className={styles.wrapper} duration={600}>
				<div className={styles.dialog}>
					<div className={styles.header}>
						<h2>Link Your iNeFTe Frame to your Account</h2>
						<p>Scan the QR code or enter the code into the iNeFTe web app to link your frame</p>
					</div>
					<div className={styles.body}>
						<div className={styles.qrcode}>
							<QRCode value={code} level={'H'} size={304} />
							{ isExpired && <div className={styles.expired} onClick={onReset}><ResetSVG /></div> }
						</div>
						<h1>{code}</h1>
					</div>
				</div>
			</Bounce>
		);
	}
	return <></>;
}

export default FrameLinker;