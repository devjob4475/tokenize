import React, { useEffect } from 'react';
import { useDataContext } from '../context';

function Login() {
  const { data, setData } = useDataContext();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify([
      {
        "profileName": "Address-TH",
        "tokenData": data.name
      },
      {
        "profileName": "Address-TH",
        "tokenData": data.surname
      },
      {
        "profileName": "CreditCard",
        "tokenData": data.creditcard
      },
      {
        "profileName": "HKID",
        "tokenData": data.passportid
      },
      {
        "profileName": "Address-TH",
        "tokenData": data.email
      },
      {
        "profileName": "HKID",
        "tokenData": data.bankacno
      },
      {
        "profileName": "Address-TH",
        "tokenData": data.balance
      }
    ]);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("/batch/token", requestOptions)
      .then(response => response.json())
      .then(result => setData(prevData => ({ ...prevData, datatoken: result })))
      .catch(error => console.log('error', error));
  }, []); 

  return (
    <div></div>
  );
}

export default Login;
