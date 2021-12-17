import { Component } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { keys } from 'lodash-es';
import { MetaMaskInpageProvider } from '@metamask/providers';
import Web3 from 'web3';
import { ContractService } from './contract.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tfmfrontend';

  private provider: any;
  private accounts: any;
  private ethereumWindows: any;
  private web3js:any;
  private contract:any;

  constructor(private contractService: ContractService) {


  }

  private getAccounts = async () => {
    try {
      return await this.ethereumWindows.ethereum.request({ method: 'eth_accounts' });
    } catch (e) {
      return [];
    }
  }

  connectWithWallet = async () => {
    let instance = this;
    let ethereum: any = window;
    //console.log(ethereum);
    instance.ethereumWindows = (window as { [key: string]: any })["ethereum"] as string;
    this.web3js = new Web3(this.ethereumWindows.ethereum);


    //Verificamos que metaMask este instalado
    if (typeof instance.ethereumWindows !== 'undefined') {
      this.contractService.openMetamask().then(resp =>{
        console.log(resp);
      })

      console.log(await instance.getAccounts());
      console.log('MetaMask is installed!');
    }
    else {
      alert("Please install MetaMask to use this dApp!");
    }
  }





}
