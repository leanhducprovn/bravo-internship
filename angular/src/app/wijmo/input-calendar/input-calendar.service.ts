import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InputCalendarService {
  getHolidays() {
    return {
      '1/1': 'Chúc mừng năm mới',
      '27/2': 'Ngày thầy thuốc Việt Nam',
      '8/3': 'Quốc tế phụ nữ',
      '30/4': 'Giải phóng miền Nam',
      '1/5': 'Quốc tế lao động',
      '1/6': 'Quốc tế thiếu nhi',
      '27/7': 'Ngày thương binh liệt sĩ',
      '9/8': 'Ngày Quốc tế Dân tộc bản địa Thế giới',
      '2/9': 'Ngày Quốc khánh Việt Nam',
      '20/10': 'Ngày phụ nữ Việt Nam',
      '20/11': 'Ngày nhà giáo Việt Nam',
      '25/12': 'Ngày lễ giáng sinh',
    };
  }

  constructor() {}
}
