export const WebsiteRentABI =[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "website",
				"type": "string"
			}
		],
		"name": "getCurrentDeployment",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "deployment",
				"type": "address"
			}
		],
		"name": "getCurrentWebsite",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "website",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "deployment",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "rentDays",
				"type": "uint256"
			}
		],
		"name": "rentDapp",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_PLATFORM_BENEFICIARY",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "website",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "updateDappRentPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Percentage",
				"type": "uint256"
			}
		],
		"name": "updateRentFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "cid",
				"type": "string"
			}
		],
		"name": "updateWebsitesIPFSLink",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "website",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "uploadWebsite",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "allWebsitesIPFSCid",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "deploymentToWebsite",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "website",
				"type": "string"
			}
		],
		"name": "getDappRentPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "rentTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "websiteExists",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "websiteOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "websiteToDeployment",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
export const WebsiteRentBytecode = {
	"object": "608060405260056008553480156200001657600080fd5b5060405162001af138038062001af183398181016040528101906200003c91906200009b565b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000120565b600081519050620000958162000106565b92915050565b600060208284031215620000b457620000b362000101565b5b6000620000c48482850162000084565b91505092915050565b6000620000da82620000e1565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b6200011181620000cd565b81146200011d57600080fd5b50565b6119c180620001306000396000f3fe6080604052600436106100dd5760003560e01c8063b290e8491161007f578063d642c82611610059578063d642c826146102f6578063daa8995314610333578063dc007f281461035c578063e6f28a4114610399576100dd565b8063b290e84914610253578063be756b081461027c578063c0ede360146102b9576100dd565b806328dc3e7e116100bb57806328dc3e7e146101875780632ca64e4d146101b0578063abc74174146101d9578063b01267d314610216576100dd565b8063153b483f146100e25780631f473b471461011f57806322bfaa011461014a575b600080fd5b3480156100ee57600080fd5b506101096004803603810190610104919061118a565b6103b5565b6040516101169190611474565b60405180910390f35b34801561012b57600080fd5b506101346104ae565b60405161014191906114aa565b60405180910390f35b34801561015657600080fd5b50610171600480360381019061016c919061118a565b61053c565b60405161017e9190611474565b60405180910390f35b34801561019357600080fd5b506101ae60048036038101906101a9919061130d565b610585565b005b3480156101bc57600080fd5b506101d760048036038101906101d2919061129e565b6105e9565b005b3480156101e557600080fd5b5061020060048036038101906101fb919061118a565b610774565b60405161020d9190611474565b60405180910390f35b34801561022257600080fd5b5061023d6004803603810190610238919061115d565b6107bd565b60405161024a91906114aa565b60405180910390f35b34801561025f57600080fd5b5061027a6004803603810190610275919061118a565b61095a565b005b34801561028857600080fd5b506102a3600480360381019061029e919061115d565b6109ce565b6040516102b091906114aa565b60405180910390f35b3480156102c557600080fd5b506102e060048036038101906102db919061118a565b610a6e565b6040516102ed919061154c565b60405180910390f35b34801561030257600080fd5b5061031d6004803603810190610318919061118a565b610a9c565b60405161032a919061154c565b60405180910390f35b34801561033f57600080fd5b5061035a60048036038101906103559190611242565b610b78565b005b34801561036857600080fd5b50610383600480360381019061037e919061118a565b610c84565b604051610390919061148f565b60405180910390f35b6103b360048036038101906103ae91906111d3565b610cba565b005b6000426003836040516103c8919061145d565b9081526020016040518091039020541115610423576000826040516103ed919061145d565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506104a9565b6000600383604051610435919061145d565b90815260200160405180910390208190555060008083604051610458919061145d565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600090505b919050565b600680546104bb9061174f565b80601f01602080910402602001604051908101604052809291908181526020018280546104e79061174f565b80156105345780601f1061050957610100808354040283529160200191610534565b820191906000526020600020905b81548152906001019060200180831161051757829003601f168201915b505050505081565b6005818051602081018201805184825260208301602085012081835280955050505050506000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105df57600080fd5b8060088190555050565b600015156004846040516105fd919061145d565b908152602001604051809103902060009054906101000a900460ff1615151461065b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106529061152c565b60405180910390fd5b600160048460405161066d919061145d565b908152602001604051809103902060006101000a81548160ff021916908315150217905550806005846040516106a3919061145d565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008084604051610700919061145d565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160028460405161075d919061145d565b908152602001604051809103902081905550505050565b6000818051602081018201805184825260208301602085012081835280955050505050506000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805461080b9061174f565b80601f01602080910402602001604051908101604052809291908181526020018280546108379061174f565b80156108845780601f1061085957610100808354040283529160200191610884565b820191906000526020600020905b81548152906001019060200180831161086757829003601f168201915b505050505090504260038260405161089c919061145d565b90815260200160405180910390205411156108ba5780915050610955565b60006003826040516108cc919061145d565b90815260200160405180910390208190555060405180602001604052806000815250600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209080519060200190610940929190611020565b50604051806020016040528060008152509150505b919050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146109b457600080fd5b80600690805190602001906109ca929190611020565b5050565b600160205280600052604060002060009150905080546109ed9061174f565b80601f0160208091040260200160405190810160405280929190818152602001828054610a199061174f565b8015610a665780601f10610a3b57610100808354040283529160200191610a66565b820191906000526020600020905b815481529060010190602001808311610a4957829003601f168201915b505050505081565b6003818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b600081600481604051610aaf919061145d565b908152602001604051809103902060009054906101000a900460ff16610b0a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b01906114ec565b60405180910390fd5b600060646005600286604051610b20919061145d565b908152602001604051809103902054610b39919061166b565b610b43919061163a565b905080600285604051610b56919061145d565b908152602001604051809103902054610b6f91906115e4565b92505050919050565b81600481604051610b89919061145d565b908152602001604051809103902060009054906101000a900460ff16610be4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdb906114ec565b60405180910390fd5b82600581604051610bf5919061145d565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c5b57600080fd5b82600285604051610c6c919061145d565b90815260200160405180910390208190555050505050565b6004818051602081018201805184825260208301602085012081835280955050505050506000915054906101000a900460ff1681565b82600481604051610ccb919061145d565b908152602001604051809103902060009054906101000a900460ff16610d26576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1d906114ec565b60405180910390fd5b42600385604051610d37919061145d565b90815260200160405180910390205410610d86576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7d9061150c565b60405180910390fd5b600284604051610d96919061145d565b908152602001604051809103902054341015610de7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dde906114cc565b60405180910390fd5b81603c610df4919061166b565b42610dff91906115e4565b600385604051610e0f919061145d565b90815260200160405180910390208190555082600085604051610e32919061145d565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209080519060200190610ed1929190611020565b50600060646005600287604051610ee8919061145d565b908152602001604051809103902054610f01919061166b565b610f0b919061163a565b9050600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610f75573d6000803e3d6000fd5b50600585604051610f86919061145d565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600287604051610fde919061145d565b9081526020016040518091039020549081150290604051600060405180830381858888f19350505050158015611018573d6000803e3d6000fd5b505050505050565b82805461102c9061174f565b90600052602060002090601f01602090048101928261104e5760008555611095565b82601f1061106757805160ff1916838001178555611095565b82800160010185558215611095579182015b82811115611094578251825591602001919060010190611079565b5b5090506110a291906110a6565b5090565b5b808211156110bf5760008160009055506001016110a7565b5090565b60006110d66110d18461158c565b611567565b9050828152602081018484840111156110f2576110f1611873565b5b6110fd84828561170d565b509392505050565b6000813590506111148161195d565b92915050565b600082601f83011261112f5761112e61186e565b5b813561113f8482602086016110c3565b91505092915050565b60008135905061115781611974565b92915050565b6000602082840312156111735761117261187d565b5b600061118184828501611105565b91505092915050565b6000602082840312156111a05761119f61187d565b5b600082013567ffffffffffffffff8111156111be576111bd611878565b5b6111ca8482850161111a565b91505092915050565b6000806000606084860312156111ec576111eb61187d565b5b600084013567ffffffffffffffff81111561120a57611209611878565b5b6112168682870161111a565b935050602061122786828701611105565b925050604061123886828701611148565b9150509250925092565b600080604083850312156112595761125861187d565b5b600083013567ffffffffffffffff81111561127757611276611878565b5b6112838582860161111a565b925050602061129485828601611148565b9150509250929050565b6000806000606084860312156112b7576112b661187d565b5b600084013567ffffffffffffffff8111156112d5576112d4611878565b5b6112e18682870161111a565b93505060206112f286828701611148565b925050604061130386828701611105565b9150509250925092565b6000602082840312156113235761132261187d565b5b600061133184828501611148565b91505092915050565b611343816116c5565b82525050565b611352816116d7565b82525050565b6000611363826115bd565b61136d81856115c8565b935061137d81856020860161171c565b61138681611882565b840191505092915050565b600061139c826115bd565b6113a681856115d9565b93506113b681856020860161171c565b80840191505092915050565b60006113cf6017836115c8565b91506113da82611893565b602082019050919050565b60006113f26027836115c8565b91506113fd826118bc565b604082019050919050565b60006114156019836115c8565b91506114208261190b565b602082019050919050565b60006114386016836115c8565b915061144382611934565b602082019050919050565b61145781611703565b82525050565b60006114698284611391565b915081905092915050565b6000602082019050611489600083018461133a565b92915050565b60006020820190506114a46000830184611349565b92915050565b600060208201905081810360008301526114c48184611358565b905092915050565b600060208201905081810360008301526114e5816113c2565b9050919050565b60006020820190508181036000830152611505816113e5565b9050919050565b6000602082019050818103600083015261152581611408565b9050919050565b600060208201905081810360008301526115458161142b565b9050919050565b6000602082019050611561600083018461144e565b92915050565b6000611571611582565b905061157d8282611781565b919050565b6000604051905090565b600067ffffffffffffffff8211156115a7576115a661183f565b5b6115b082611882565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b60006115ef82611703565b91506115fa83611703565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561162f5761162e6117b2565b5b828201905092915050565b600061164582611703565b915061165083611703565b9250826116605761165f6117e1565b5b828204905092915050565b600061167682611703565b915061168183611703565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156116ba576116b96117b2565b5b828202905092915050565b60006116d0826116e3565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561173a57808201518184015260208101905061171f565b83811115611749576000848401525b50505050565b6000600282049050600182168061176757607f821691505b6020821081141561177b5761177a611810565b5b50919050565b61178a82611882565b810181811067ffffffffffffffff821117156117a9576117a861183f565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f496e73756666696369656e742046756e64732053656e74000000000000000000600082015250565b7f546865205765627369746520646f6573206e6f74206578697374206f6e20486f60008201527f73744d794e465400000000000000000000000000000000000000000000000000602082015250565b7f5765627369746520697320616c72656164792072656e74656400000000000000600082015250565b7f7765627369746520616c72656164792065786973747300000000000000000000600082015250565b611966816116c5565b811461197157600080fd5b50565b61197d81611703565b811461198857600080fd5b5056fea26469706673582212201231d4f92fa3982125d6ad302a1cb9d7df8b322e3a891de2233b9d9ba95a02a864736f6c63430008070033",
    }
export const WebsiteRentAddress = "0x69924df22a8cF57d7261Ca9b8f00f235600E0f59";
