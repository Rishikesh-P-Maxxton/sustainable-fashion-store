import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

  accordionItems = [
   
      { 
        title: 'What makes clothing sustainable?', 
        body: 'Sustainable clothing is made from eco-friendly materials like organic cotton or recycled fabrics, which reduce environmental impact. It also involves ethical manufacturing practices, ensuring fair wages and safe working conditions for workers.'
      },
      { 
        title: 'How can I tell if a clothing brand is sustainable?', 
        body: 'Look for certifications such as GOTS (Global Organic Textile Standard) or Fair Trade, which indicate adherence to strict environmental and social standards. Additionally, check if the brand provides transparency about its sourcing and production processes.'
      },
      { 
        title: 'Are sustainable clothes more expensive?', 
        body: 'Sustainable clothes can be more expensive due to higher production costs associated with eco-friendly materials and ethical practices. However, they are often more durable and of higher quality, offering better long-term value.'
      },
      { 
        title: 'How can I care for my sustainable clothing?', 
        body: 'To extend the life of your sustainable clothing, follow care instructions carefully, such as washing in cold water and air-drying. Avoiding frequent washing and using natural detergents can also help maintain the integrity of the fabrics.'
      },
      { 
        title: 'Can sustainable clothing be stylish?', 
        body: 'Absolutely! Many sustainable brands offer a wide range of stylish and trendy options that don\'t compromise on aesthetics. With growing awareness and innovation, sustainable fashion is increasingly incorporating the latest trends and designs.'
      },
      
  
  ];
}
