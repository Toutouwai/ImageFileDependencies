# Image & File Dependencies

A module for ProcessWire CMS/CMF. Allows Image and File fields to be used in inputfield dependency selectors. Note: prefix field names with an underscore in your dependency selectors.

## Usage

[Install](http://modules.processwire.com/install-uninstall/) the ImageFileDependencies module.

You can now create an [inputfield dependency](https://processwire.com/api/selectors/inputfield-dependencies/) based on the number of images or files added to a Image or File field. 

When you create an inputfield dependency for a Image or File field, prefix your field name with an underscore. Example for a field named 'images': `_images>3`
Note that you do not include a '.count' subfield in the selector.

## License

Released under Mozilla Public License v2. See file LICENSE for details.