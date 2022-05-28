import {makeAutoObservable} from 'mobx'
import { large } from './large';

export default class VisualVersion {
    constructor(){
        this._largeVersion = false;
        makeAutoObservable(this)
    }

    setVisualVersion(largeVersion){
        large(largeVersion);
        
    }
    setLargeVersion(largeVersion) {
        this._largeVersion = !largeVersion;
    }

    get largeVersion() {
        return this._largeVersion
    }
}