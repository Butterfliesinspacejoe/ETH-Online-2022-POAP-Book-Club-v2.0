# lambda_function.py

import boto3
import requests
import json
from datetime import datetime


API_KEY = "03f489ea-6083-41a5-98bb-facdeb5d1f55"

# Replace with your metadata URIs
UNREAD_BOOK_URI = "ipfs://bafkreienbo6q4dedoyqdzcn2sw2a5h6lxuvlyfclnls6q53rhvmeiw4zl4" 
READ_BOOK_URI = "ipfs://bafkreihdcrj5a2lir26j4bhnrlaxtu5gklxwdrmqrjdz6yyds2beaikixq"
URL = "https://api.nftport.xyz/v0/mints/customizable"
    
    
def lambda_handler(event, context):
    aws_client=boto3.client('ssm')
    response=aws_client.get_parameter(Name="vote",WithDecryption=True)
    time = datetime.now().hour
    cleanVote=response["Parameter"]["Value"].split(",")
    unreadVote=int(cleanVote[0])
    readVote=int(cleanVote[1])
    if unreadVote > readVote:
        metadata_uri = UNREAD_BOOK_URI
    else:
        metadata_uri = READ_BOOK_URI

    # Replace with the contract_address you got from 1 A and token_ID from 1 D
    payload = {
                "chain":"polygon",
                "contract_address": "0xEBf10e6935b1E95Fa2341ef3E24D924AE85e8c54",
                "token_id": "189156088990443698096",
                "metadata_uri": metadata_uri
        
    }
    headers = {
                "Content-Type": "application/json",
                "Authorization": API_KEY
    }
    response = requests.request("PUT", URL, data=json.dumps(payload), headers=headers)
    return {
        'statusCode': 200,
        'body': json.dumps(response.json())
    }# lambda_function.py

