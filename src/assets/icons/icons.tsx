/* eslint-disable jsx-a11y/no-static-element-interactions */
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
      id="button-svg"
    >
      <path
        d="M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z"
      />
    </svg>
  );
}
export function EditIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      fill="grey"
      className="icon"
    >
      <path
        d="M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z"
      />
    </svg>
  );
}

export function ArrowLeftIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg" className="icon arrow-icon">
      <path d="M3.4 8.13377H4.324L1.42 4.80977L8.608 4.78577V4.08977H1.42L4.324 0.753771H3.4L0.112 4.44977L3.4 8.13377Z" />
    </svg>
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

export function InfoIcon() {
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
export function AddPhotoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon" fill="white">
      <path
        d="M20,10.5a1,1,0,0,0-1,1v7a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H6a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68H14a1,1,0,0,0,0-2H8.44A3,3,0,0,0,5.6,6.55l-.32,1H4a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3v-7A1,1,0,0,0,20,10.5Zm-9-1a4,4,0,1,0,4,4A4,4,0,0,0,11,9.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,11,15.5Zm11-11H21v-1a1,1,0,0,0-2,0v1H18a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0v-1h1a1,1,0,0,0,0-2Z"
      />
    </svg>
  );
}

export function CloseIcon(props: {callback: () => void }) {
  const { callback } = props;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="close-popap-icon" onClick={() => callback()}>
      <svg
        className="icon close"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M602.512147 511.99738l402.747939-402.747939a63.999673 63.999673 0 0 0-90.509537-90.509537L512.00261 421.487843 109.254671 18.749904a63.999673 63.999673 0 0 0-90.509537 90.509537L421.493073 511.99738 18.755134 914.745319a63.999673 63.999673 0 0 0 90.509537 90.509537L512.00261 602.506917l402.747939 402.747939a63.999673 63.999673 0 0 0 90.509537-90.509537z"
        />
      </svg>
    </div>
  );
}

export function MoreIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" className="icon more">
      <path
        d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z"
      />
    </svg>
  );
}

export function MuteIcon() {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="512.000000pt"
      height="512.000000pt"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
      className="popup-svg muted-bell-popup"
    >
      <metadata>
        Created by potrace 1.16, written by Peter Selinger 2001-2019
      </metadata>
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
        <path d="M2453 4991 c-89 -32 -156 -98 -192 -188 -11 -27 -21 -33 -64 -44
-310 -73 -613 -254 -831 -499 -32 -36 -65 -75 -74 -88 -15 -23 -17 -22 -271
231 -141 140 -270 262 -288 271 -45 22 -135 21 -182 -3 -71 -37 -121 -115
-121 -190 0 -79 12 -95 330 -416 l307 -310 -25 -70 c-13 -38 -36 -122 -50
-185 -25 -113 -25 -124 -31 -670 -7 -634 1 -583 -103 -672 -254 -217 -361
-379 -410 -618 -16 -79 -19 -127 -16 -286 l3 -190 37 -75 c46 -93 112 -158
206 -202 l67 -32 494 -5 493 -5 23 -60 c114 -304 352 -506 660 -560 102 -18
175 -19 265 -5 317 50 563 250 681 553 l28 72 338 3 338 2 250 -249 c137 -137
264 -256 280 -264 89 -44 189 -25 253 48 55 63 70 124 47 201 -15 52 -29 70
-175 218 l-158 161 29 35 c17 19 44 64 62 100 l32 65 -1 225 c0 259 -11 316
-88 475 -70 143 -144 231 -334 393 -104 89 -96 37 -103 677 -5 528 -6 566 -28
668 -125 606 -564 1082 -1141 1236 -119 32 -115 29 -152 101 -72 140 -236 204
-385 151z m244 -631 c362 -46 672 -245 864 -554 60 -98 103 -200 137 -325 l26
-96 6 -575 c6 -496 9 -583 23 -633 43 -148 117 -254 257 -367 195 -158 248
-260 258 -496 3 -99 2 -133 -8 -139 -8 -5 -450 430 -1348 1328 l-1336 1336 58
75 c245 321 663 496 1063 446z m-439 -3188 c-761 -1 -1389 0 -1397 3 -11 4
-13 30 -9 138 10 230 62 333 251 490 126 105 192 186 234 289 48 119 52 174
53 713 0 275 3 524 7 553 l6 54 1119 -1119 1118 -1118 -1382 -3z"
        />
      </g>
    </svg>
  );
}

export function PhoneIconTopPanel() {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="1000px"
      height="1000px"
      viewBox="0 0 900 900"
      preserveAspectRatio="xMidYMid meet"
      className="popup-svg phone-popup"
    >
      <metadata>
        Created by potrace 1.16, written by Peter Selinger 2001-2019
      </metadata>
      <g transform="translate(-150,900) scale(0.100000,-0.100000)" stroke="none" className="phone-popup">
        <path d="M3405 7380 c-143 -9 -216 -29 -297 -81 -103 -67 -188 -195 -225 -344
-13 -53 -17 -108 -16 -225 1 -142 4 -169 38 -315 112 -483 281 -977 480 -1408
90 -193 113 -232 239 -400 242 -322 500 -592 801 -836 641 -520 1303 -807
2065 -895 178 -21 416 -21 495 -1 157 41 287 144 349 276 51 108 61 195 60
514 -1 225 -4 280 -18 330 -37 127 -109 228 -205 293 -70 47 -287 134 -541
217 -156 52 -186 59 -279 63 -207 9 -414 -50 -606 -173 -27 -17 -117 -90 -199
-161 -236 -204 -294 -252 -400 -330 l-99 -74 -81 57 c-398 278 -737 600 -1005
951 l-63 83 70 92 c87 115 162 205 325 387 137 153 186 219 234 315 105 208
132 491 68 695 -45 142 -214 590 -256 677 -69 146 -197 245 -354 278 -88 18
-409 26 -580 15z m539 -440 c37 -33 46 -56 204 -495 74 -206 75 -212 75 -305
-1 -115 -33 -226 -91 -316 -22 -32 -103 -131 -182 -219 -79 -88 -166 -188
-194 -223 l-50 -63 -19 38 c-29 55 -159 381 -205 513 -70 197 -131 397 -184
600 -46 180 -50 201 -46 285 5 105 30 164 81 195 30 19 52 20 304 20 l272 0
35 -30z m2502 -2819 c149 -45 291 -94 411 -140 131 -51 127 -40 131 -367 3
-266 3 -271 -19 -298 -12 -16 -37 -35 -55 -42 -90 -38 -518 5 -827 82 -200 51
-487 152 -620 221 l-27 14 177 152 c314 269 364 308 449 349 67 32 169 61 239
67 6 1 69 -17 141 -38z"
        />
      </g>
    </svg>
  );
}

export function TrashIcon() {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="48.000000pt"
      height="48.000000pt"
      viewBox="0 0 48.000000 48.000000"
      preserveAspectRatio="xMidYMid meet"
      className="popup-svg trash-popup"
    >

      <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" stroke="none">
        <path d="M175 410 c-3 -5 -22 -10 -41 -10 -27 0 -34 -4 -34 -20 0 -19 7 -20
140 -20 133 0 140 1 140 20 0 16 -7 20 -34 20 -19 0 -38 5 -41 10 -3 6 -33 10
-65 10 -32 0 -62 -4 -65 -10z"
        />
        <path d="M122 203 l3 -138 115 0 115 0 3 138 3 137 -121 0 -121 0 3 -137z
m198 -3 l0 -100 -80 0 -80 0 0 100 0 100 80 0 80 0 0 -100z"
        />
      </g>
    </svg>
  );
}

export function SearchIconTopPanel() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px" className="popup-svg search-popup">
      <path
        d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"
      />
    </svg>
  );
}
export function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">
      <path d="M12 2A10 10 0 1 0 12 22A10 10 0 1 0 12 2Z" opacity=".3" fill="grey" className="github-icon" />
      <path
        d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"
      />
    </svg>
  );
}
