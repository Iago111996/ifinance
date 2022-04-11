import { AttachmentsInterface } from "../interfaces/attachmentsInterface";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";
import { v4 } from "uuid";

export const getAll = async () => {
  let list: AttachmentsInterface[] = [];
  const attachmentFolder = ref(storage, "attachments");
  const attachmentsList = await listAll(attachmentFolder);

  for (let i in attachmentsList.items) {
    let attachmentUrl = await getDownloadURL(attachmentsList.items[i]);

    list.push({
      name: attachmentsList.items[i].name,
      url: attachmentUrl,
    });
  }

  return list;
};

export const Insert = async (file: File) => {
  if (["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
    let randomName = v4();
    let newFile = ref(storage, `attachments/${randomName}`);

    let upload = await uploadBytes(newFile, file);

    let attachmentUrl = await getDownloadURL(upload.ref);

    return {
      name: upload.ref.name,
      url: attachmentUrl,
    } as AttachmentsInterface;

  } else {
    return new Error("Tipo de arquivo não permitido");
  }
};

export const Delete = async (name: string) => {
  let fileForDelete = ref(storage, `attachments/${name}`);

  await deleteObject(fileForDelete);
};
