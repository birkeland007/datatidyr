import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import { Helmet } from 'react-helmet'
import MyTable from '../components/table';
import './editor.css'
import {
  Link
} from "react-router-dom";



import logo from '../images/logo.png';
import customers from '../images/icons/customers.png';
import database from '../images/icons/database.png';
import project from '../images/icons/project.png';
import how_to from '../images/how-to.png';
import logo_bw from '../images/logo/logo-low-res-no-bg-bw.png';


const formatBytes = (bytes, decimals = 1) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

const Editor = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [stats, setStats] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (!file) {
      setError('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    axios
      .post('http://localhost:5000/upload', formData)
      .then((response) => {
        Papa.parse(response.data, {
          header: true,
          complete: (results) => {
            setData(results.data);
            setError(null);
          },
          error: (error) => {
            setError(error);
          },
        });
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    axios.get('http://localhost:5000/getstats')
      .then(res => {
        setStats(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="editor-container">
        <Helmet>
          <title>DataTidyr</title>
          <meta property="og:title" content="DataTidyr" />
        </Helmet>
        <div className='editor-desktop-navigation'>
          <div className='editor-centered'>
            <header data-role="Header" className="editor-header">
              <div className='editor-left'>
                <Link to='/'>
                  <img
                    src={logo}
                    alt="image"
                    className="editor-image"
                  />
                </Link>
              </div>
              <div className='editor-right'>
                <a href='mailto:michaelbirkeland@gmail.com'>
                  <svg viewBox="0 0 1024 1024" className="editor-icon">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                </a>
                <a href='https://www.linkedin.com/in/michael-birkeland/' target="_blank">
                  <svg viewBox="0 0 877.7142857142857 1024" className="editor-icon">
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </a>
                <a href='https://github.com/birkeland007' target="_blank">
                  <svg viewBox="0 0 877.7142857142857 1024" className="editor-icon">
                    <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
                  </svg>
                </a>
              </div>
            </header>
          </div>
        </div>
        <div className="editor-hero">
          <div className="editor-table">
            <div>
              {data && <MyTable data={data} />}
            </div>
          </div>
          <div className="editor-uploader">
            <label htmlFor='file-upload' className="custom-file-upload">Choose file</label>
            <input id="file-upload" type="file" onChange={handleFileChange} />
            {file && (
              <div className='file-info'>
                <p className="file-info-title">File Name: <br></br></p>
                <p className="file-info-info">{file.name}</p>
                <p className="file-info-title">File Size: <br></br></p>
                <p className="file-info-info">{formatBytes(file.size)}</p>
                <p className="file-info-title">File Type: <br></br></p>
                <p className="file-info-info">{file.type}</p>
              </div>
            )}
            <button disabled={!file} className="upload-button" onClick={handleFileUpload}>Upload</button>
            {error && <p>{error}</p>}
          </div>
        </div>
        <div className="editor-stats">
          <div className="editor-stat">
            <img
              alt="pastedImage"
              src={customers}
              className="editor-icon12"
            />
            <span className="editor-text">Customers</span>
            {stats && <h1 className="editor-text5">{stats[0]}</h1>}
          </div>
          <div className="editor-stat1">
            <img
              alt="pastedImage"
              src={project}
              className="editor-icon15"
            />
            <span className="editor-text2">Projects initiated</span>
            {stats && <h1 className="editor-text5">{stats[1]}</h1>}
          </div>
          <div className="editor-stat2">
            <img
              alt="pastedImage"
              src={database}
              className="editor-icon17"
            />
            <span className="editor-text4">Data processed</span>
            {stats && <h1 className="editor-text5">{formatBytes(stats[2])}</h1>}
          </div>
        </div>
        <div className='editor-how-to'>
          <div className='editor-how-to-wrapper'>
            <div className='editor-how-to-img-wrap'><div className='editor-how-to-01'>
              <h3>Upload Data:</h3>
              <span>To upload data into the software, locate the
                "Upload Data" button or option in the menu bar and select it.
                Choose the file you want to upload from your device, and wait for the upload process to complete.
              </span></div><img className='how-to-img' src={how_to}></img></div>
            <div className='editor-how-to-wrapper2'>
              <div className='editor-how-to-02'>
                <h3>Manage Data:</h3>
                <span>You can move columns, edit cells, and perform other data
                  management tasks. Simply select the cells or columns you want to
                  edit and make your changes.</span></div>
              <div className='editor-how-to-03'>
                <h3>Analyze Data:</h3>
                <span>You'll find built-in graphs
                  and charts that you can use to visualize your data.
                  Choose the graph that best represents your data and
                  customize it to your needs.</span></div>
            </div>
          </div>
        </div>
      </div>
      <footer className="editor-footer">
        <div className="editor-bottom">
          <img
            alt="pastedImage"
            src={logo_bw}
            className="editor-branding"
          />
          <div className='editor-footer-group-text'>
            <span className="editor-text24">Copyright © datatidyr 2023</span>
            <span className="editor-text25">Powered by <a className='editor-footer-link' href='https://reactdatagrid.io/'>ReactDataGrid</a></span>
          </div>
        </div>
      </footer>
    </div>



  );
};

export default Editor;
