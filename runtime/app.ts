import { Component, ViewChild, Type } from '@angular/core';
import { ImageCropperComponent, CropperSettings, Bounds } from '../index';

@Component({
    selector: 'test-app',
    template: `
<div class="page-header">
  <h1>angular2-img-cropper <small>samples</small></h1>
</div>
<tabset [pills]="false" >
    <tab title="Basic" [disabled]="false">
        <div class="row">
        <div class="col-md-9">
            <h3>source</h3>
            <img-cropper [image]="data1" [settings]="cropperSettings1" (onCrop)="cropped($event)"></img-cropper>
        </div>
        <h3>result</h3>
        <div class="col-md-3">
            <span *ngIf="data1.image" >
                <img [src]="data1.image"
                    [width]="cropperSettings1.cropWidth"
                    [height]="cropperSettings1.cropHeight"
                    style="max-width: 200px; height: auto;">
            </span>
        </div>
        </div>
<h3>settings</h3>
<pre>
<code>
this.cropperSettings1 = new CropperSettings();
this.cropperSettings1.width = 200;
this.cropperSettings1.height = 200;

this.cropperSettings1.croppedWidth = 200;
this.cropperSettings1.croppedHeight = 200;

this.cropperSettings1.canvasWidth = 500;
this.cropperSettings1.canvasHeight = 300;

this.cropperSettings1.minWidth = 100;
this.cropperSettings1.minHeight = 100;

this.cropperSettings1.rounded = false;

this.cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
this.cropperSettings1.cropperDrawSettings.strokeWidth = 2;
</code>
</pre>
    </tab>
    <tab title="Round crop" [disabled]="false">
        <div class="row">
        <div class="col-md-9">
            <h3>source</h3>
            <img-cropper #cropper [image]="data2" [settings]="cropperSettings2"></img-cropper>
            <div>
                <label class="btn btn-primary">
                    Upload
                    <input id="file_input_file" class="none" type="file" style="display: none;" (change)="fileChangeListener($event)"/>
                </label>
            </div>
        </div>
        <h3>result</h3>
        <div class="col-md-3">
            <span *ngIf="data2.image" >
              <img [src]="data2.image" [width]="cropperSettings2.croppedWidth" [height]="cropperSettings2.croppedHeight" style="border-radius: 100px">
            </span>
        </div>
        </div>
<h3>settings</h3>
<pre>
<code>
this.cropperSettings2 = new CropperSettings();
this.cropperSettings2.width = 200;
this.cropperSettings2.height = 200;
this.cropperSettings2.keepAspect = false;

this.cropperSettings2.croppedWidth = 200;
this.cropperSettings2.croppedHeight = 200;

this.cropperSettings2.canvasWidth = 500;
this.cropperSettings2.canvasHeight = 300;

this.cropperSettings2.minWidth = 100;
this.cropperSettings2.minHeight = 100;

this.cropperSettings2.rounded = true;
this.cropperSettings2.minWithRelativeToResolution = false;

this.cropperSettings2.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
this.cropperSettings2.cropperDrawSettings.strokeWidth = 2;
this.cropperSettings2.noFileInput = true;
</code>
</pre>
    </tab>

    <tab title="Initial crop position" [disabled]="false">
        <div class="row">
        <div class="col-md-9">
            <h3>source</h3>
            <img-cropper #cropper [image]="data3" [settings]="cropperSettings3"></img-cropper>
        </div>
        <h3>result</h3>
        <div class="col-md-3">
            <span *ngIf="data3.image" >
              <img [src]="data3.image" [width]="cropperSettings3.croppedWidth" [height]="cropperSettings3.croppedHeight">
            </span>
        </div>
        </div>
<h3>settings</h3>
<pre>
<code>
this.cropperSettings3 = new CropperSettings();
this.cropperSettings3.width = 200;
this.cropperSettings3.height = 250;
this.cropperSettings3.keepAspect = false;

this.cropperSettings3.croppedWidth = 200;
this.cropperSettings3.croppedHeight = 250;

this.cropperSettings3.canvasWidth = 500;
this.cropperSettings3.canvasHeight = 300;

this.cropperSettings3.minWidth = 100;
this.cropperSettings3.minHeight = 100;

this.cropperSettings3.rounded = false;
this.cropperSettings3.minWithRelativeToResolution = false;

this.cropperSettings3.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
this.cropperSettings3.cropperDrawSettings.strokeWidth = 2;

this.cropperSettings3.initialX = 75;
this.cropperSettings3.initialY = 75;
this.cropperSettings3.initialW = 200;
this.cropperSettings3.initialH = 200;
</code>
</pre>
</tab>
</tabset>    
    `
})
export class AppComponent extends Type {

    //Cropper 1 data
    public data1:any;
    public cropperSettings1:CropperSettings;

    //Cropper 2 data
    public data2:any;
    public cropperSettings2:CropperSettings;
    @ViewChild('cropper', undefined)
    public cropper:ImageCropperComponent;

    //Cropper 3 data
    public data3: any;
    public cropperSettings3: CropperSettings;

    constructor() {
        super();

        this.cropperSettings1 = new CropperSettings();
        this.cropperSettings1.width = 200;
        this.cropperSettings1.height = 200;

        this.cropperSettings1.croppedWidth = 200;
        this.cropperSettings1.croppedHeight = 200;

        this.cropperSettings1.canvasWidth = 500;
        this.cropperSettings1.canvasHeight = 300;

        this.cropperSettings1.minWidth = 100;
        this.cropperSettings1.minHeight = 100;

        this.cropperSettings1.rounded = false;

        this.cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
        this.cropperSettings1.cropperDrawSettings.strokeWidth = 2;

        this.cropperSettings1.keepAspect = false;

        this.data1 = {};


        //Cropper settings 2
        this.cropperSettings2 = new CropperSettings();
        this.cropperSettings2.width = 200;
        this.cropperSettings2.height = 200;
        this.cropperSettings2.keepAspect = false;

        this.cropperSettings2.croppedWidth = 200;
        this.cropperSettings2.croppedHeight = 200;

        this.cropperSettings2.canvasWidth = 500;
        this.cropperSettings2.canvasHeight = 300;

        this.cropperSettings2.minWidth = 100;
        this.cropperSettings2.minHeight = 100;

        this.cropperSettings2.rounded = true;
        this.cropperSettings2.minWithRelativeToResolution = false;

        this.cropperSettings2.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
        this.cropperSettings2.cropperDrawSettings.strokeWidth = 2;
        this.cropperSettings2.noFileInput = true;

        this.data2 = {};

        //Cropper settings 3
        this.cropperSettings3 = new CropperSettings();
        this.cropperSettings3.width = 200;
        this.cropperSettings3.height = 250;
        this.cropperSettings3.keepAspect = true;

        this.cropperSettings3.croppedWidth = 200;
        this.cropperSettings3.croppedHeight = 250;

        this.cropperSettings3.canvasWidth = 500;
        this.cropperSettings3.canvasHeight = 300;

        this.cropperSettings3.minWidth = 100;
        this.cropperSettings3.minHeight = 100;

        this.cropperSettings3.rounded = false;
        this.cropperSettings3.minWithRelativeToResolution = false;

        this.cropperSettings3.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
        this.cropperSettings3.cropperDrawSettings.strokeWidth = 2;
        this.cropperSettings3.noFileInput = false;


        this.cropperSettings3.initialX = 75;
        this.cropperSettings3.initialY = 75;
        this.cropperSettings3.initialW = 200;
        this.cropperSettings3.initialH = 200;

        this.data3 = {};

    }

    public cropped(bounds:Bounds) {
        console.log(this);
        //console.log(bounds);
    }

    /**
     * Used to send image to second cropper
     * @param $event
     */
    public fileChangeListener($event:any) {
        var image:any = new Image();
        var file:File = $event.target.files[0];
        var myReader:FileReader = new FileReader();
        var that = this;
        myReader.addEventListener('loadend', function (loadEvent:any) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
        });

        myReader.readAsDataURL(file);
    }
}
