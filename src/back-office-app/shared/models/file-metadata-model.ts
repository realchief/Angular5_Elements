import {UploadBucket} from "../../../common/enums/upload-bucket";

export class FileMetadataModel {
  key: string;
  uploadBucket: UploadBucket;
  sizeInKb: number;
  fileType: string;
}
