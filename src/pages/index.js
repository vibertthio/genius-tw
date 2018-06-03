import React from 'react';
import FadeIn from '../utils/fade-in';

import styles from './index.module.css';
import fbIcon from '../assets/images/fb-icon.svg';
import ghIcon from '../assets/images/gh-icon.svg';
import mdIcon from '../assets/images/medium-icon.svg';
import mailIcon from '../assets/images/mail-icon.svg';
import './index.css';

export default () => (
  <div className={styles.container}>
    <div className={styles.aboutContainer}>
      <FadeIn
        x={{
					start: 70,
					end: 0,
					stiffness: 50,
					damping: 20,
				}}
      >
        <h1 className={styles.title}>Twenius</h1>
      </FadeIn>
      <FadeIn>
        <div className={styles.contentContainer}>
          <p>
          (used to love her)<br/>
          她來自紐約 但我們在台北遇見<br/>
          人生地不熟 她的聲音我在無意中聽見<br/>
          她說英文我說中文儘管有語言的隔閡<br/>
          在那一刻我感覺到我們的靈魂交合<br/>
          沒有辦法解釋 到底是為什麼<br/>
          心跳加速我只想大聲的說 就是妳了<br/>
          這個看似草率而意外的選擇<br/>
          想不到 跑不掉 丟不下又捨不得<br/>
          </p>
        </div>
      </FadeIn>
    </div>
    <FadeIn
      x={{
				start: -30,
				end: 0,
				stiffness: 50,
				damping: 8,
			}}
    >
      <div>
        <ul className={styles.snList}>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/vibert.thio"
            >
              <img src={fbIcon} className={styles.snIcon} alt="fb-icon" />
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/vibertthio">
              <img src={ghIcon} className={styles.snIcon} alt="gh-icon" />
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://medium.com/@vibertthio">
              <img src={mdIcon} className={styles.snIcon} alt="medium-icon" />
            </a>
          </li>
          <li>
            <a href="mailto:vibertthio@gmail.com">
              <img src={mailIcon} className={styles.snIcon} alt="email-icon" />
            </a>
          </li>
        </ul>
      </div>
    </FadeIn>
  </div>
);
