module.exports = {
   resize(file, width, height) {
      var reader = new FileReader();
      reader.onload = function (event) {
         var img = new Image();
         img.onload = function () {
               var oc = document.createElement('canvas'), octx = oc.getContext('2d');
               oc.width = 300;
               oc.height = 300;
               octx.drawImage(img, 0, 0);
               while (oc.width * 0.5 > width) {
                  oc.width *= 0.5;
                  oc.height *= 0.5;
                  octx.drawImage(oc, 0, 0, oc.width, oc.height);
               }
               oc.width = width;
               oc.height = height;
               octx.drawImage(img, 0, 0, oc.width, oc.height);
               document.getElementById('output-image').src = oc.toDataURL();
         };
         img.src = event.target.result;
      };
      reader.readAsDataURL(file);
   }
};