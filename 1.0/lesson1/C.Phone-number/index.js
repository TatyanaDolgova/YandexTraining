const fs = require('fs');

const data = fs.readFileSync('input.txt', { encoding: 'utf8' });
let lines = data.toString().split('\n');
let currentPhone = '';
let result = [];
const newPhoneArr = [];

lines.map((phone, i) => {
  if (phone) {
    phone = phone.replace(/-|\(|\)/g, '');
    if (phone.length < 11) {
      phone = '+7495' + phone;
    }
    if (phone[0] === '8') {
      phone = phone.replace('8', '+7');
    }
    if (i === 0) {
      currentPhone = phone;
    } else {
      newPhoneArr.push(phone);
    }
  }

})

newPhoneArr.forEach((item) => {
  if (item === currentPhone) {
    result.push('YES');
  } else {
    result.push('NO');
  }
})
result = result.join('\n');

fs.writeFileSync('output.txt', result.toString());