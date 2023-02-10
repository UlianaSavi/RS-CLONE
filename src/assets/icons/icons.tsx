import datatIcon from './data.png';
import devices from './devices.png';
import phoneIcon from './phone-user.png';
import folders from './folders.png';
import gearWheel from './gearWheel.png';
import info from './info.png';
import laungage from './laungage.png';
import lock from './lock.png';
import nameUser from './name-user.png';
import notice from './notice.png';

export function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="50px"
      height="50px"
      fill="#6f6f6f"
      id="search-svg"
    >
      <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
    </svg>
  );
}

export function SettingsIcon() {
  return (
    <svg
      className="popup-svg"
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="48.000000pt"
      height="48.000000pt"
      viewBox="0 0 48.000000 48.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        className="popup-svg-color"
        transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path
          d="M187 419 c-5 -17 -11 -20 -34 -15 -40 9 -87 -39 -77 -78 5 -22 3 -28
-15 -33 -18 -4 -21 -13 -21 -53 0 -40 3 -49 21 -53 18 -5 20 -11 15 -33 -10
-39 37 -87 77 -78 23 5 29 2 34 -15 4 -18 13 -21 53 -21 40 0 49 3 53 21 5 17
11 20 34 15 40 -9 87 39 78 77 -5 20 -2 29 14 39 30 19 30 93 0 101 -18 5 -20
11 -15 33 10 39 -37 87 -77 78 -23 -5 -29 -2 -34 15 -4 18 -13 21 -53 21 -40
0 -49 -3 -53 -21z m83 -28 c7 -14 23 -21 53 -23 42 -3 42 -3 45 -45 2 -30 9
-46 23 -53 10 -6 19 -19 19 -30 0 -11 -9 -24 -19 -30 -14 -7 -21 -23 -23 -53
-3 -42 -3 -42 -45 -45 -30 -2 -46 -9 -53 -23 -14 -25 -46 -25 -60 0 -7 14 -23
21 -53 23 -42 3 -42 3 -45 45 -2 30 -9 46 -23 53 -25 14 -25 46 0 60 14 7 21
23 23 53 3 42 3 42 45 45 30 2 46 9 53 23 6 10 19 19 30 19 11 0 24 -9 30 -19z"
        />
        <path
          d="M195 351 c-45 -20 -70 -60 -70 -112 0 -42 5 -53 33 -81 47 -48 117
-48 164 0 28 28 33 39 33 82 0 42 -5 54 -31 81 -33 33 -92 46 -129 30z m17
-70 c-5 -3 -15 -19 -23 -35 -20 -42 -39 -45 -39 -6 0 22 9 41 32 63 l33 32 3
-24 c2 -13 0 -26 -6 -30z m102 7 c19 -27 22 -81 4 -76 -7 3 -19 18 -27 34 -8
16 -18 31 -23 32 -4 2 -8 15 -8 28 0 21 3 23 19 14 11 -5 27 -20 35 -32z m-58
-39 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m41 -62
c12 -12 -26 -37 -57 -37 -31 0 -66 23 -57 37 7 12 102 11 114 0z"
        />
      </g>
    </svg>
  );
}

export function EmojiIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24px" height="24px" fill="#6f6f6f" id="emoji-svg" className="message-input__icon">
      <path
        d="M256 352C293.2 352 319.2 334.5 334.4 318.1C343.3 308.4 358.5 307.7 368.3 316.7C378 325.7 378.6 340.9 369.6 350.6C347.7 374.5 309.7 400 256 400C202.3 400 164.3 374.5 142.4 350.6C133.4 340.9 133.1 325.7 143.7 316.7C153.5 307.7 168.7 308.4 177.6 318.1C192.8 334.5 218.8 352 256 352zM208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
      />
    </svg>
  );
}

export function AttachIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24px" height="24px" fill="#6f6f6f" id="attach-svg" className="message-input__icon">
      <path
        d="M396.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"
      />
    </svg>
  );
}

export function SendMessageIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24px" height="24px" fill="#ffff" id="attach-svg" className="message-input__send-icon">
      <path
        d="M236.4,201.5,141.8,32.6a16,16,0,0,0-27.9,0L19.3,201.5a15.7,15.7,0,0,0,1.8,18.1,15.9,15.9,0,0,0,17.6,4.8l78.5-28.1a4.1,4.1,0,0,0,2.7-3.8V120.3a8.2,8.2,0,0,1,7.4-8.3,8,8,0,0,1,8.6,8v72.5a4,4,0,0,0,2.6,3.8l78.6,28.1a17,17,0,0,0,5.4.9,16,16,0,0,0,13.9-23.8Z"
      />
    </svg>
  );
}

export function AudioMessageIcon() {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="484.5px"
      height="484.5px"
      viewBox="0 0 484.5 484.5"
      xmlSpace="preserve"
      className="message-input__audio-icon"
    >
      <g>
        <g id="mic">
          <path d="M242.25,306c43.35,0,76.5-33.15,76.5-76.5v-153c0-43.35-33.15-76.5-76.5-76.5c-43.35,0-76.5,33.15-76.5,76.5v153
C165.75,272.85,198.9,306,242.25,306z M377.4,229.5c0,76.5-63.75,130.05-135.15,130.05c-71.4,0-135.15-53.55-135.15-130.05H63.75
c0,86.7,68.85,158.1,153,170.85v84.15h51v-84.15c84.15-12.75,153-84.149,153-170.85H377.4L377.4,229.5z"
          />
        </g>
      </g>
    </svg>
  );
}

export function CreateNewChatIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      fill="#ffff"
      id="create-svg"
    >
      <path
        d="M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z"
      />
    </svg>
  );
}

export function ArrowLeftIcon() {
  return (
    <span>&#129120;</span>
  );
}

export function LogOutIcon() {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="48.000000pt"
      height="48.000000pt"
      viewBox="0 0 48.000000 48.000000"
      preserveAspectRatio="xMidYMid meet"
      className="logOut-icon icon"
    >
      <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="grey" stroke="none">
        <path d="M80 400 c-18 -18 -20 -33 -20 -160 0 -182 -1 -180 143 -180 105 0
147 13 147 45 0 23 -20 28 -39 11 -15 -14 -37 -16 -112 -14 l-94 3 0 135 0
135 94 3 c75 2 97 0 112 -14 19 -17 39 -12 39 11 0 32 -42 45 -147 45 -90 0
-106 -3 -123 -20z"
        />
        <path d="M325 309 c-4 -5 1 -19 10 -29 17 -19 15 -19 -81 -22 -80 -2 -99 -6
-99 -18 0 -12 19 -16 99 -18 97 -3 98 -3 80 -23 -13 -15 -15 -22 -6 -31 10
-10 22 -3 54 30 l42 42 -39 40 c-41 42 -50 46 -60 29z"
        />
      </g>
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <div>
      <img className="icon" src={phoneIcon} alt="" />
    </div>
  );
}

export function DatatIcon() {
  return (
    <div>
      <img className="icon" src={datatIcon} alt="" />
    </div>
  );
}

export function DevicesIcon() {
  return (
    <div>
      <img className="icon" src={devices} alt="" />
    </div>
  );
}

export function FoldersIcon() {
  return (
    <div>
      <img className="icon" src={folders} alt="" />
    </div>
  );
}

export function GearWheelIcon() {
  return (
    <div>
      <img className="icon" src={gearWheel} alt="" />
    </div>
  );
}

export function InfolIcon() {
  return (
    <div>
      <img className="icon" src={info} alt="" />
    </div>
  );
}

export function LaungageIcon() {
  return (
    <div>
      <img className="icon" src={laungage} alt="" />
    </div>
  );
}

export function LockIcon() {
  return (
    <div>
      <img className="icon" src={lock} alt="" />
    </div>
  );
}

export function NameUserIcon() {
  return (
    <div>
      <img className="icon" src={nameUser} alt="" />
    </div>
  );
}

export function NoticeIcon() {
  return (
    <div>
      <img className="icon" src={notice} alt="" />
    </div>
  );
}
