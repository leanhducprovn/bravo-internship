import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InputCalendarService {
  getHolidays() {
    return {
      '1/1': 'Chúc mừng năm mới',
      '2/27': 'Ngày thầy thuốc Việt Nam',
      '3/8': 'Quốc tế phụ nữ',
      '4/30': 'Giải phóng miền Nam',
      '5/1': 'Quốc tế lao động',
      '6/1': 'Quốc tế thiếu nhi',
      '7/27': 'Ngày thương binh liệt sĩ',
      '8/9': 'Ngày Quốc tế Dân tộc bản địa Thế giới',
      '9/2': 'Ngày Quốc khánh Việt Nam',
      '10/20': 'Ngày phụ nữ Việt Nam',
      '11/20': 'Ngày nhà giáo Việt Nam',
      '12/25': 'Ngày lễ giáng sinh',
    };
  }

  constructor() {}
}
