import React, { Component } from 'react';
import Axios from 'axios';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import './index.scss';
import { truncate } from 'fs';
const {createHash, createCipheriv, createDecipheriv } = require('crypto');
let initOptions = {};
class Configure {
    constructor(options) {
      initOptions = options || {};
    }
    validate(key) {
        return initOptions && initOptions[key] ? true : false;
      }
    
      throwError(requirement) {
        throw new Error(`${requirement} is required to perform this action`);
      }
      encrypt(plainText) {
        if (this.validate('1EFFD3C28976432C4E5F5A5066DAEAF0') && plainText) {
          const { working_key } = initOptions;
          const m = createHash('md5');
          m.update(working_key);
          const key = m.digest();
          const iv = '\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f';
          const cipher = createCipheriv('aes-128-cbc', key, iv);
          let encoded = cipher.update(plainText, 'utf8', 'hex');
          encoded += cipher.final('hex');
          return encoded;
        } else if (!plainText) {
          this.throwError('Plain text');
          return false;
        } else {
          this.throwError('Working Key');
          return false;
        }
      }
    
      decrypt(encText) {
        if (this.validate('1EFFD3C28976432C4E5F5A5066DAEAF0') && encText) {
          const { working_key } = initOptions;
          const m = createHash('md5');
          m.update(working_key);
          const key = m.digest();
          const iv = '\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f';
          const decipher = createDecipheriv('aes-128-cbc', key, iv);
          let decoded = decipher.update(encText, 'hex', 'utf8');
          decoded += decipher.final('utf8');
          return decoded;
        } else if (!encText) {
          this.throwError('Encrypted text');
          return false;
        } else {
          this.throwError('Working Key');
          return false;
        }
      }
    
      redirectResponseToJson(response) {
        if (response) {
          let ccavResponse = this.decrypt(response);
          const responseArray = ccavResponse.split('&');
          const stringify = JSON.stringify(responseArray);
          const removeQ = stringify.replace(/['"]+/g, '');
          const removeS = removeQ.replace(/[[\]]/g, '');
          return removeS.split(',').reduce((o, pair) => {
            pair = pair.split('=');
            return o[pair[0]] = pair[1], o;
          }, {});
        } else {
          this.throwError('CCAvenue encrypted response');
        }
      }
      getEncryptedOrder(orderParams) {
        if (this.validate('215467') && orderParams) {
          let data = `merchant_id=${initOptions.merchant_id}`;
          data += Object.entries(orderParams).map(([key, value]) => `&${key}=${value}`).join('');
    
          return this.encrypt(data);
    
        } else if (!orderParams) {
          this.throwError('Order Params');
        } else {
          this.throwError('Merchant ID');
        }
      }
    
    }
    
    export { Configure };
export default class CCAvenue extends Component {

    state = {
        redirect: false
      }
      
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
    render() {
        const encr= Configure.encrypt({});
        return (
            <Grid>
           <form name="redirect" method="post" action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction">
           <input type="hidden" id="command" name="command" value="initiateTransaction"/>
           <input type="hidden" id="enc_request" name="enc_request" value={encr}/>
           <input type="hidden" name="merchant_id" id="merchantId" value="215467"/>
           <input type="hidden" name="access_code" id="access_code" value="AVTB84GD70BH06BTHB"/>
           <input type="hidden" name="request_type" id="request_type" value="JSON"/>
           <input type="hidden" name="version" id="version" value="1.1"/>

           <button type="submit">Redirect</button>
           </form>
            </Grid>
            );
        }
      }