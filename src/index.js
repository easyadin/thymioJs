import {createClient, Node, NodeStatus, Request, setup} from '@mobsya/thymio-api';

//Connect to the switch
//We will need some way to get that url, via the launcher
let client = createClient("ws://localhost:8083");
let selectedNode = undefined

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
