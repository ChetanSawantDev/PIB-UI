import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { Chip } from 'primeng/chip';

@Component({
  selector: 'app-cron-for-year',
  standalone: true,
  imports: [Chip, CheckboxModule,CommonModule,FormsModule],
  templateUrl: './cron-for-year.component.html',
  styleUrl: './cron-for-year.component.scss'
})
export class CronForYearComponent {
  public l_years : CL_YearsSelection[] = l_years;
  public l_year_to_choose :CL_SelectedYear = {};
  @Output() public l_get_year_selected : EventEmitter<string> = new EventEmitter();


  lFN_ChooseYear(l_type : keyof CL_SelectedYear){
    if(this.l_year_to_choose.EACH_YEAR){
      this.l_get_year_selected.emit('*');
    }else if(this.l_year_to_choose.SPECIFIC_YEAR){
      let l_year_selected : any = '';
      l_years.forEach(l_yrs_mast=>{
        if(l_yrs_mast.l_checked){
          l_year_selected = l_year_selected !== '' ? ( l_year_selected + ',' + l_yrs_mast.l_value) : l_yrs_mast.l_value;   
        }
      })
      this.l_get_year_selected.emit(l_year_selected);
    }
    this.
    lFN_ForceSingleSelection(l_type);
  }

  lFN_ForceSingleSelection(l_type :keyof  CL_SelectedYear){
    if(l_type === 'EACH_YEAR' && this.l_year_to_choose.EACH_YEAR){
      this.l_year_to_choose.SPECIFIC_YEAR = false;
    }else if(l_type === 'SPECIFIC_YEAR' && this.l_year_to_choose.SPECIFIC_YEAR){
      this.l_year_to_choose.EACH_YEAR = false;
    }else{
      this.l_year_to_choose.EACH_YEAR = false;
      this.l_year_to_choose.SPECIFIC_YEAR = false;
    }
  } 
}

interface CL_SelectedYear{
  EACH_YEAR ?: boolean;
  SPECIFIC_YEAR ?: boolean;
}


export class CL_YearsSelection{
  public l_label_name : string ="";
  public l_checked : boolean = false;
  public l_value ?: number;

  constructor(init?:Partial<CL_YearsSelection>){
    Object.assign(this,init)
  }
}

let l_years: CL_YearsSelection[] = [
  { l_checked: false, l_label_name: '2025', l_value: 2025 },
  { l_checked: false, l_label_name: '2026', l_value: 2026 },
  { l_checked: false, l_label_name: '2027', l_value: 2027 },
  { l_checked: false, l_label_name: '2028', l_value: 2028 },
  { l_checked: false, l_label_name: '2029', l_value: 2029 },
  { l_checked: false, l_label_name: '2030', l_value: 2030 },
  { l_checked: false, l_label_name: '2031', l_value: 2031 },
  { l_checked: false, l_label_name: '2032', l_value: 2032 },
  { l_checked: false, l_label_name: '2033', l_value: 2033 },
  { l_checked: false, l_label_name: '2034', l_value: 2034 },
  { l_checked: false, l_label_name: '2035', l_value: 2035 },
  { l_checked: false, l_label_name: '2036', l_value: 2036 },
  { l_checked: false, l_label_name: '2037', l_value: 2037 },
  { l_checked: false, l_label_name: '2038', l_value: 2038 },
  { l_checked: false, l_label_name: '2039', l_value: 2039 },
  { l_checked: false, l_label_name: '2040', l_value: 2040 },
  { l_checked: false, l_label_name: '2041', l_value: 2041 },
  { l_checked: false, l_label_name: '2042', l_value: 2042 },
  { l_checked: false, l_label_name: '2043', l_value: 2043 },
  { l_checked: false, l_label_name: '2044', l_value: 2044 },
  { l_checked: false, l_label_name: '2045', l_value: 2045 },
  { l_checked: false, l_label_name: '2046', l_value: 2046 },
  { l_checked: false, l_label_name: '2047', l_value: 2047 },
  { l_checked: false, l_label_name: '2048', l_value: 2048 },
  { l_checked: false, l_label_name: '2049', l_value: 2049 },
  { l_checked: false, l_label_name: '2050', l_value: 2050 },
  { l_checked: false, l_label_name: '2051', l_value: 2051 },
  { l_checked: false, l_label_name: '2052', l_value: 2052 },
  { l_checked: false, l_label_name: '2053', l_value: 2053 },
  { l_checked: false, l_label_name: '2054', l_value: 2054 },
  { l_checked: false, l_label_name: '2055', l_value: 2055 },
  { l_checked: false, l_label_name: '2056', l_value: 2056 },
  { l_checked: false, l_label_name: '2057', l_value: 2057 },
  { l_checked: false, l_label_name: '2058', l_value: 2058 },
  { l_checked: false, l_label_name: '2059', l_value: 2059 },
  { l_checked: false, l_label_name: '2060', l_value: 2060 },
  { l_checked: false, l_label_name: '2061', l_value: 2061 },
  { l_checked: false, l_label_name: '2062', l_value: 2062 },
  { l_checked: false, l_label_name: '2063', l_value: 2063 },
  { l_checked: false, l_label_name: '2064', l_value: 2064 },
  { l_checked: false, l_label_name: '2065', l_value: 2065 },
  { l_checked: false, l_label_name: '2066', l_value: 2066 },
  { l_checked: false, l_label_name: '2067', l_value: 2067 },
  { l_checked: false, l_label_name: '2068', l_value: 2068 },
  { l_checked: false, l_label_name: '2069', l_value: 2069 },
  { l_checked: false, l_label_name: '2070', l_value: 2070 },
  { l_checked: false, l_label_name: '2071', l_value: 2071 },
  { l_checked: false, l_label_name: '2072', l_value: 2072 },
  { l_checked: false, l_label_name: '2073', l_value: 2073 },
  { l_checked: false, l_label_name: '2074', l_value: 2074 },
  { l_checked: false, l_label_name: '2075', l_value: 2075 },
  { l_checked: false, l_label_name: '2076', l_value: 2076 },
  { l_checked: false, l_label_name: '2077', l_value: 2077 },
  { l_checked: false, l_label_name: '2078', l_value: 2078 },
  { l_checked: false, l_label_name: '2079', l_value: 2079 },
  { l_checked: false, l_label_name: '2080', l_value: 2080 },
  { l_checked: false, l_label_name: '2081', l_value: 2081 },
  { l_checked: false, l_label_name: '2082', l_value: 2082 },
  { l_checked: false, l_label_name: '2083', l_value: 2083 },
  { l_checked: false, l_label_name: '2084', l_value: 2084 },
  { l_checked: false, l_label_name: '2085', l_value: 2085 },
  { l_checked: false, l_label_name: '2086', l_value: 2086 },
  { l_checked: false, l_label_name: '2087', l_value: 2087 },
  { l_checked: false, l_label_name: '2088', l_value: 2088 },
  { l_checked: false, l_label_name: '2089', l_value: 2089 },
  { l_checked: false, l_label_name: '2090', l_value: 2090 },
  { l_checked: false, l_label_name: '2091', l_value: 2091 },
  { l_checked: false, l_label_name: '2092', l_value: 2092 },
  { l_checked: false, l_label_name: '2093', l_value: 2093 },
  { l_checked: false, l_label_name: '2094', l_value: 2094 },
  { l_checked: false, l_label_name: '2095', l_value: 2095 },
  { l_checked: false, l_label_name: '2096', l_value: 2096 },
  { l_checked: false, l_label_name: '2097', l_value: 2097 },
  { l_checked: false, l_label_name: '2098', l_value: 2098 },
  { l_checked: false, l_label_name: '2099', l_value: 2099 }
];
