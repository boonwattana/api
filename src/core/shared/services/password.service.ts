import * as CryptoJS from 'crypto-js';

export class PasswordService {

  private static key = CryptoJS.enc.Utf8.parse('4512631236589784');
  private static iv = CryptoJS.enc.Utf8.parse('4512631236589784');

  static encrypt(plainText: string) {
    return CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(plainText), this.key, {
      keySize: 128 / 8,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString();
  }

  static decrypt(ciphertext) {
    return CryptoJS.AES.decrypt(ciphertext, this.key, {
      keySize: 128 / 8,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString();
  }
}
