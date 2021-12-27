import { ReactComponent as WifiIcon } from 'assets/wifi.svg';
import { ReactComponent as BatteryIcon } from 'assets/battery.svg';
import { ReactComponent as LinkIcon } from 'assets/link.svg';
import styles from './style.module.css';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from 'auth';

const SystemBar = () => {
	const { token } = useContext(AuthContext);
	const [ wifiStatus ] = useState(false);
	const [ batteryStatus ] = useState(false);	
	const [ clock, setClock ] = useState('');

	const updateTime = () => {
		const datetime = new Date();
		let hours = datetime.getHours();
		const minutes = datetime.getMinutes();
		const ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'    
		const strTime = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;
		setClock(strTime);
	};

	useEffect(() => {
		updateTime();
		const interval = setInterval(updateTime, 60000);
		return () => {
			clearInterval(interval);
		};
	});

	return (<div className={styles.wrapper}>
		<div className={styles.body}>
			<div className={styles.buttons}>
				<a className={`${styles.button} ${wifiStatus ? styles.selected : ''}`}><WifiIcon /></a>
				<a className={`${styles.button} ${batteryStatus ? styles.selected : ''}`}><BatteryIcon /></a>
				<a className={`${styles.button} ${token ? styles.selected : ''}`}><LinkIcon /></a>
			</div>
			<div className={styles.clock}>
				<h1>{ clock }</h1>
			</div>
		</div>
	</div>);
};


export default SystemBar;
