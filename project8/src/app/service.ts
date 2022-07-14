import { Injectable } from '@angular/core';

export namespace Contacts
{
  export class ServiceService {
    constructor() { }

    serv():string
    {
      return "Service get loaded...";
    }
  }

@Injectable({
  providedIn: 'root'
})
export class AddNewContact {
  constructor() {}

  display1():string 
  {
    return "New Contact Added";
  }
}

@Injectable({
  providedIn: 'root',
})
export class EditContact {
  constructor() {}

  display2():string
  {
    return "Contact Updated";
  }
}

@Injectable({
  providedIn: 'root',
})
export class DeleteContact {
  constructor() {}

  display3():string 
  {
    return "Contact Deleted";
  }
}

@Injectable({
  providedIn: 'root',
})
export class ListContact {
  constructor() {}

  display4():string 
  {
    return "Contact List";
  }
}
}