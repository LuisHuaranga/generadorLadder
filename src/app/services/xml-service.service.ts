import { Injectable } from '@angular/core';
import { XMLParser } from 'fast-xml-parser';

@Injectable({
  providedIn: 'root'
})
export class XmlService {

  constructor() { }

  public convertXmlToJson(xmlData: string): any {
    const options = {
      ignoreAttributes: false,
      attributeNamePrefix: ""
    };

    const parser = new XMLParser(options);
    const jsonObj = parser.parse(xmlData);
    return jsonObj;
  }
}