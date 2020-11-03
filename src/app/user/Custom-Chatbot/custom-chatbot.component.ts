import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { chatbotModel } from './custom-chatbot.model';
import { CustomerChatbotService } from './custom-chatbot.service';

@Component({
    selector : 'custom-chatbot',
    templateUrl : './custom-chatbot.component.html',
    styleUrls : ['./custom-chatbot.component.scss']

})
export class CustomChatbot implements OnInit{
    selectionForm : FormGroup;
    public colorItem : any[] = ['red', 'blue', 'yellow']
    public imgBack  : string = '#2d6187'
    public isColorSelectorClicked : boolean = false
    data : chatbotModel
    logoImageSrc: any;

    private _logoFile: any;
    constructor(private _formBuilder : FormBuilder, private customService : CustomerChatbotService){
        this.onFetch()
    }    

    // @ViewChild('colVal') colVal : ElementRef   
   ngOnInit() : void{
    this.selectionForm = this._formBuilder.group({
        name : [],
        color : [],
        avatar : [],
        toggle : []
    })
    
    console.log("Monee  form detail", this.data)
    this.selectionForm.patchValue({name : this.data.name})
   }

   
   assignLogo(fileList: FileList): void {
    if (!fileList.length) {
        console.log('file list length is negitive boolean');
        return;
    } else {
        const allowedTypes = ['image/jpeg', 'image/png'];
        const file = fileList[0];

        // Return if the file is not allowed
        if (!allowedTypes.includes(file.type)) {
            console.log('file type not included');
            return;
        } else {
            // if the file is selected
            // with required constraints.

            this._logoFile = file;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (_event) => {
                this.logoImageSrc = reader.result;                
            };
        }
    }
}

   onColorSeldctorOpen(){
       this.isColorSelectorClicked = true
   }

   onBackgroundChange(color :  string){
    this.imgBack = color
    this.isColorSelectorClicked = false
   }

   onSubmit(){
        this.selectionForm.value.color = this.imgBack
        this.customService.postData(this.selectionForm.value).subscribe(
            response =>{
                
            }
        )
        setTimeout(() =>{
            this.onFetch();
        }, 3000)
   }

   onFetch(){
       this.customService.fatchData().subscribe(
           response =>{
               this.data = response[response.length - 1]
               console.log("Data fetched from server  ", this.data)
           }
       )
   }
    
}