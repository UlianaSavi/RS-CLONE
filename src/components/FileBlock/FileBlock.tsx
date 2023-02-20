import { useContext } from 'react';
import { SendImageContext } from '../../context/SendImageContext';
import { limit } from '../../constans';
import { IFileInfo } from '../../types';
import './FileBlock.scss';

function FileBlock(props: {fileInfo?: IFileInfo}) {
  const { popap, file } = useContext(SendImageContext);
  const fileSize = file ? `${(file.size / 1024).toFixed(2)} KB` : '0 KB';
  const fileName = file?.name.split('.').pop();
  const { fileInfo } = props;

  return (
    <div className="doc">
      {
      popap && !fileInfo ? (
        <>
          <div className="doc__icon">
            <span className="doc__type">{`${fileName}`}</span>
          </div>
          <div className="doc__info">
            <div className="doc__info__name">{file?.name}</div>
            <div className="doc__info__size">{file && file?.size > limit ? 'File is too big!' : fileSize}</div>
          </div>
        </>
      ) : (
        <>
          <div className="doc__icon">
            <span className="doc__type">{`${fileInfo?.fileType}`}</span>
          </div>
          <div className="doc__info">
            <div className="doc__info__name">{fileInfo?.fileName}</div>
            <div className="doc__info__size">{fileInfo?.fileSize}</div>
          </div>
        </>
      )
    }
    </div>
  );
}

export default FileBlock;
