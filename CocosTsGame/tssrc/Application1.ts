import { IApplication } from "./IApplication";
export default class Application1 implements IApplication {

    _config: {
        isdebug: boolean
    };
    constructor() {
        //TODO
    }
    startUp() {
        console.log("Hello Application 1");
    }
}
