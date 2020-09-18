<template>
    <div :class="Object.assign(formGroupClasses, {'is-dragging': isDragging, 'enable-dropzone': dropzone, 'enable-multiple': multiple})">
        <dropzone @drop="onDrop" @dragover="onDragOver" @dragenter="onDragEnter" @dragleave="onDragLeave">
            <file-field
                v-show="multiple && (!maxUploads || maxUploads > value.length) || !multiple && !value"
                ref="field"
                v-bind="controlAttributes"
                :error="error"
                :errors="errors"
                :help-text="helpText"
                :label="label"
                :legacy="legacy"
                :multiple="multiple"
                @input="onInput" />

            <thumbnail-list
                v-if="files && files.length || $slots.default && $slots.default.length"
                class="mt-3"
                :width="width"
                :min-width="minWidth"
                :max-width="maxWidth"
                :height="height"
                :min-height="minHeight"
                :max-height="maxHeight"
                cover>
                <keep-alive v-for="(file, i) in files" :key="file.name">
                    <file-preview
                        :key="file.name"
                        :file="file"
                        :progress="progressBars[i] || 0"
                        @loaded="onLoadedPreview"
                        @close="onRemove(i)" />
                </keep-alive>
                <slot />
            </thumbnail-list>
        </dropzone>
    </div>
</template>

<script>
import Dropzone from '@vue-interface/dropzone';
import FileField from '@vue-interface/file-field';
import FilePreview from '@vue-interface/file-preview';
import FormControl from '@vue-interface/form-control';
import ThumbnailList from '@vue-interface/thumbnail-list';

export default {

    name: 'UploadField',

    components: {
        Dropzone,
        FileField,
        FilePreview,
        ThumbnailList,
    },

    mixins: [
        FormControl
    ],

    model: {
        prop: 'files'
    },

    props: {

        /**
         * The default class name assigned to the control element
         *
         * @param {String}
         * @default 'form-control'
         */
        defaultControlClass: {
            type: String,
            default: null
        },

        /**
         * Can user drag/drop files into browser to upload them.
         *
         * @param {Boolean}
         * @default true
         */
        dropzone: {
            type: Boolean,
            default: true
        },

        /**
         * Can user drag/drop files into browser to upload them.
         *
         * @param {Number|String}
         */
        dropzoneMinHeight: [Number, String],

        /**
         * The height attribute for the control element
         *
         * @param {Number|String}
         */
        height: [Number, String],

        /**
         * Can user upload multiple files
         *
         * @param {Number}
         */
        multiple: Boolean,

        /**
         * The maximum height attribute for the control element
         *
         * @param {Number|String}
         */
        maxHeight: [Number, String],

        /**
         * The maximum number of files that a user can upload
         *
         * @param {Number}
         */
        maxUploads: Number,

        /**
         * The maximum width attribute for the control element
         *
         * @param {Number|String}
         */
        maxWidth: [Number, String],

        /**
         * The minimum height attribute for the control element
         *
         * @param {Number|String}
         */
        minHeight: [Number, String],

        /**
         * The minimum width attribute for the control element
         *
         * @param {Number|String}
         */
        minWidth: [Number, String],

        /**
         * The width attribute for the control element
         *
         * @param {Number|String}
         */
        width: [Number, String],

        /**
         * The data attribute
         *
         * @param {File|FileList}
         */
        value: [String, Array, Object]
        
    },

    data() {
        return {
            progressBars: {},
            isDragging: false,
            files: !this.value ? [] : (this.multiple ? Array.from(this.value) : [this.value])
        };
    },

    computed: {

        showDropElement() {
            return this.isDragging;
        }

    },

    watch: {
        files(value) {
            this.$emit('input', this.multiple ? value : (
                value && value.length ? value[0] : null
            ));
        }
    },

    methods: {

        onRemove(index) {
            this.files.splice(index, 1);
        },

        hasExceededLimit() {
            return !!this.maxUploads && this.maxUploads > this.files.length;
        },

        indexOf(file) {
            const data = {
                name: file.name,
                lastModified: file.lastModified,
                lastModifiedDate: file.lastModifiedDate,
                size: file.size,
                type: file.type
            };

            return this.files.indexOf(file);
        },

        removeFile(file) {
            this.files.splice(this.indexOf(file), 1);
        },

        addFile(file, subject) {
            if(this.multiple) {
                if(!this.hasExceededLimit() && this.indexOf(file) === -1) {
                    this.files.push(file);
                }
            }
            else {
                this.files = [file];
            }
        },

        addFiles(files) {
            Array.from(files).forEach(file => {
                this.addFile(file);
            });

            event.target.value = null;
        },

        /**
         * The `change` event callback.
         *
         * @type Object
         */
        onInput(files) {
            if(files instanceof FileList) {
                this.addFiles(files);
            }
            else {
                this.addFile(files);
            }
        },

        /**
         * The `dragover` event callback.
         *
         * @type Object
         */
        onDragOver(event) {
            this.isDragging = true;
            this.$emit('drag-over', event);
        },

        /**
         * The `dragover` event callback.
         *
         * @type Object
         */
        onDragEnter(event) {
            this.isDragging = true;
            this.$emit('drag-enter', event);
        },

        /**
         * The `dragleave` event callback.
         *
         * @type Object
         */
        onDragLeave(event) {
            this.isDragging = false;
            this.$emit('drag-leave', event);
        },

        /**
         * The `drop` event callback.
         *
         * @param {String}
         */
        onDrop(event) {
            this.isDragging = false;
            this.addFiles(event.dataTransfer.files);
            this.$emit('update:dragging', false);
            this.$emit('drop', event);
        },

        /**
         * The `loaded` event callback.
         *
         * @type Object
         */
        onLoadedPreview(event) {
            this.$emit('loaded', event);
        }
    }

};
</script>

<style>
.upload-field.is-dragging,
.upload-field .is-dragging {
    position: static;
}

.upload-field .div.form-control {
    height: auto;
    border: 0;
    padding: 0;
}

.upload-field .file-preview {
    min-width: 100px;
    min-height: 100px;
}
.upload-field .uploading .file-preview {
    opacity: .5;
}
</style>
