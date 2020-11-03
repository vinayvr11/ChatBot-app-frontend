import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { chatbotModel } from './custom-chatbot.model'
import {map} from 'rxjs/operators'
import { BehaviorSubject, Observable } from 'rxjs'
import { CustomChatbot } from './custom-chatbot.component'

@Injectable({
    providedIn : 'root'
})
export class CustomerChatbotService{
    url : string = 'https://angulardemo-e0c2b.firebaseio.com/custom-chatbot.json'

    constructor(private http : HttpClient){ }

    postData(data : chatbotModel){
       return this.http.post<{name : string}>(this.url, data)       
    }

    fatchData(){
        return  this.http.get<{[key : string] : chatbotModel}>(this.url).pipe(
                map((response) =>{
                    const postData : chatbotModel[] = []
                    for(const key in response){
                        if(response.hasOwnProperty(key)){
                            postData.push({...response[key], id : key})
                        }
                    }
                    
                    // console.log(postData)
                    return postData;
                })
            )
    }
}