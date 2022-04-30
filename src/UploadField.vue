<template>
    <div class="upload-field" :class="{'is-dragging': isDragging, 'multiple': multiple, ...formGroupClasses}">
        <dropzone
            class="upload-field-dropzone"
            @drop.prevent="onDrop"
            @dragover.prevent="onDragOver"
            @dragenter.prevent="onDragEnter"
            @dragleave.prevent="onDragLeave">
            <input ref="input" type="file" :multiple="multiple" hidden @change="onFileChange">

            <slot name="button" v-bind="{ onClickUpload }">
                <btn type="button" :variant="invalid || invalidFeedback ? 'danger' : 'primary'" @click="onClickUpload">
                    {{ label }}
                </btn>
            </slot>
        </dropzone>
        
        <slot name="files" v-bind="{ files, onClickClose }">
            <div v-if="files.length" class="upload-field-files">
                <slot name="file" v-bind="{ file, onClickClose }">
                    <file-preview
                        v-for="file in files"
                        :key="file.name"
                        :file="file"
                        @close="onClickClose" />
                </slot>
            </div>
        </slot>

        <slot name="feedback">
            <div 
                v-if="invalidFeedback"
                class="invalid-feedback"
                invalid
                v-html="invalidFeedback" />
            <div 
                v-else-if="validFeedback"
                class="valid-feedback"
                valid
                v-html="validFeedback" />
        </slot>

        <slot name="help">
            <small v-if="helpText" ref="help">
                {{ helpText }}
            </small>
        </slot>
    </div>
</template>

<script>
import { Btn } from '@vue-interface/btn';
import { Dropzone } from '@vue-interface/dropzone';
import { FilePreview } from '@vue-interface/file-preview';
import { FormControl } from '@vue-interface/form-control';

export default {

    name: 'UploadField',

    components: {
        Btn,
        Dropzone,
        FilePreview
    },

    mixins: [
        FormControl
    ],

    model: {
        prop: 'files'
    },

    props: {

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

        label: {
            type: String,
            default: 'Upload Files'
        },

        /**
         * Can user upload multiple files
         *
         * @param {Number}
         */
        multiple: Boolean,

        /**
         * The data attribute
         *
         * @param {File|FileList}
         */
        value: [String, Array, Object]
        
    },

    data() {
        return {
            // progressBars: {},
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

        addFile(file) {
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
        },

        /**
         * The `close` event callback.
         *
         * @type {Object}
         */
        onClickClose(index) {
            this.files.splice(index, 1);
        },

        /**
         * The `change` event callback.
         *
         * @type {Object}
         */
        onFileChange(event) {
            this.addFiles(event.target.files);
        },

        /**
         * The upload button `click` event callback.
         *
         * @type {Object}
         */
        onClickUpload(event) {
            this.$emit('click', event);
            this.$refs.input.click();
        },

        /**
         * The `dragover` event callback.
         *
         * @type {Object}
         */
        onDragOver(event) {
            this.isDragging = true;
            this.$emit('dragover', event);
        },

        /**
         * The `dragover` event callback.
         *
         * @type {Object}
         */
        onDragEnter(event) {
            this.isDragging = true;
            this.$emit('dragenter', event);
        },

        /**
         * The `dragleave` event callback.
         *
         * @type {Object}
         */
        onDragLeave(event) {
            this.isDragging = false;
            this.$emit('dragleave', event);
        },

        /**
         * The `drop` event callback.
         *
         * @param {String}
         */
        onDrop(event) {
            this.isDragging = false;
            this.$emit('drop', event);
            this.addFiles(event.dataTransfer.files);
        }

    }

};
</script>

<style>
.upload-field .div.form-control {
    height: auto;
    border: 0;
    padding: 0;
}

.upload-field-files {
    padding-top: 1rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat( auto-fit, 10rem);
}

.upload-field .file-preview {
    min-width: 100px;
    min-height: 100px;
}
.upload-field .uploading .file-preview {
    opacity: .5;
}

.upload-field.is-valid .valid-feedback,
.upload-field.is-invalid .invalid-feedback {
    display: flex;
}
</style>
