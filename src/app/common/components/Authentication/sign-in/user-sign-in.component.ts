import { Component, OnInit } from '@angular/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../configuration/remote/ApiClient.service';

@Component({
  selector: 'app-user-sign-in',
  standalone: true,
  imports: [MenuBarComponent, CarouselModule, TagModule, InputTextModule, FormsModule],
  templateUrl: './user-sign-in.component.html',
  styleUrl: './user-sign-in.component.scss'
})
export class UserSignInComponent implements OnInit {
  
  responsiveOptions: any[] | undefined;
  services!: any[];
  public l_formData : any = {};

  constructor(private _apiService : ApiService){

  }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
    ];

    this.services = [
      {
        title: 'Efficient HR Management',
        description: 'Simplify your HR processes with our comprehensive tools for employee management, payroll, and performance tracking.',
        imagePath: 'assets/images/common/home-carousal/hr-management.png',
      },
      {
        title: 'Streamlined Finance Operations',
        description: 'Manage your finances effortlessly with our robust accounting, budgeting, and financial reporting features.',
        imagePath: 'assets/images/common/home-carousal/finance.png',
      },
      {
        title: 'Boost Sales Performance',
        description: 'Enhance your sales strategy with our advanced CRM and sales analytics tools.',
        imagePath: 'assets/images/common/home-carousal/sales.png',
      },
      {
        title: 'Optimize Retail Management',
        description: 'Oversee your retail operations with ease, from inventory management to sales tracking and customer engagement.',
        imagePath: 'assets/images/common/home-carousal/retailers.png',
      },
      {
        title: 'Ensure Quality Control',
        description: 'Maintain high standards with our quality control features, ensuring your products meet the highest quality standards.',
        imagePath: 'assets/images/common/home-carousal/Quality.png',
      },
      {
        title: 'Enhance Production Efficiency',
        description: 'Streamline your production processes with our tools for workflow management, scheduling, and monitoring.',
        imagePath: 'assets/images/common/home-carousal/production.png',
      },
      {
        title: 'Comprehensive Inventory Management',
        description: 'Keep your inventory organized with real-time tracking, stock alerts, and detailed reporting.',
        imagePath: 'assets/images/common/home-carousal/inventory.png',
      },
      {
        title: ' Efficient Logistics Management',
        description: 'Enhance your supply chain and logistics operations with our tools for transportation management, route optimization, and delivery tracking.',
        imagePath: 'assets/images/common/home-carousal/logistics.png',
      },
      {
        title: 'Advanced CRM Solutions',
        description: 'Build stronger customer relationships with our CRM tools, designed to improve customer interaction and satisfaction.',
        imagePath: 'assets/images/common/home-carousal/crm.png',
      },
      {
        title: 'Robust Administrative Tools',
        description: 'Product DescriptionManage your administrative tasks efficiently with our suite of tools designed for seamless office management.',
        imagePath: 'assets/images/common/home-carousal/admin.png',
      },
      
    ]
  }



  async lFN_Login(){
    let _url =  `http://localhost:8181/auth/authenticateUser/login`;
    let userCredentials = {
      "username" : 'chetan',
      "password" : "Arthur@8149"
  }
    this._apiService.gFN_PostApiCall(_url,userCredentials).subscribe(resp=>{
      console.warn(resp);
    });
  }
}
