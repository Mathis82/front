import { Component, OnInit } from '@angular/core';
import {profilRdv, rdv} from "../rdv";
import {ApiRdvBrokerService} from "../api-rdv-broker.service";

@Component({
  selector: 'app-lister-evt',
  templateUrl: './lister-evt.component.html',
  styleUrls: ['./lister-evt.component.css']
})
export class ListerEvtComponent implements OnInit {

  listeEvt : rdv[] = [];
  listeProf : profilRdv[] = [];

  constructor(private apiRdvBrokerService : ApiRdvBrokerService) {
  }



  ngOnInit(): void {

    this.apiRdvBrokerService.recupererliste().subscribe((data)=>{this.listeEvt = data});}
}


