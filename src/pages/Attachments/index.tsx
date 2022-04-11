import { useState, useEffect, FormEvent } from "react";
import { Spin } from "antd";
import {
  EyeInvisibleOutlined,
  LoadingOutlined,
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import { getAll, Insert, Delete } from "../../services/attachments";
import { AttachmentsInterface } from "../../interfaces/attachmentsInterface";

import {
  AttachmentText,
  Container,
  Header,
  ListGrid,
  Title,
  WarningText,
  WrapperAttachments,
  WrapperWarning,
  UploadFormat,
  UploadSection,
  WrapperProgress,
  Wrapper,
} from "./styles";

import { NavBar } from "../../components/NavBar";

export const Attachments = () => {
  const [attachments, setAttachments] = useState<AttachmentsInterface[]>([]);
  const [inputIsActivetity, setInputIsActivetity] = useState(false);
  const [deleteLoad, setDeleteLoad] = useState(false);
  const [upload, setUpload] = useState(false);
  const [load, setLoad] = useState(true);
  const [deleteId, setDeleteId] = useState("");

  const getAttachment = async () => {
    try {
      setLoad(true);

      const response = await getAll();
      setAttachments(response);

      setLoad(false);
    } catch (error: any) {
      setLoad(false);
    }
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("attachments") as File;

    if (file && file.size > 0) {
      try {
        setUpload(true);
        const response = await Insert(file);

        if (response instanceof Error) {
          alert(`${response.name}-${response.message}`);
        } else {
          setAttachments((prevItem) => [...prevItem, response]);
        }

        setUpload(false);
      } catch (error: any) {
        setUpload(false);
      }
    }
  };

  const handleDeleteAttachment = async (name: string) => {
    try {
      setDeleteId(name);

      setDeleteLoad(true);
      await Delete(name);

      setAttachments((prevItem) => [
        ...prevItem.filter((item) => item.name !== name),
      ]);
      setDeleteLoad(false);
    } catch (error: any) {
      setDeleteLoad(false);
    }
  };

  useEffect(() => {
    getAttachment();
  }, []);

  return (
    <Spin spinning={load} delay={0} indicator={<LoadingOutlined spin />}>
      <NavBar>
        <Container>
          <Header>
            <Title>Anexos</Title>

            <WrapperProgress>
              <Wrapper inputIsActivetity={inputIsActivetity}>
                <UploadFormat
                  method="POST"
                  onSubmit={handleFormSubmit}
                  inputIsActivetity={inputIsActivetity}
                >
                  <UploadSection inputIsActivetity={inputIsActivetity}>
                    <input type="file" name="attachments" className="upload" />

                    {/* <input type="submit" name="enviar" value="Enviar" /> */}
                    {upload ? (
                      <LoadingOutlined
                        style={{ fontSize: 24, color: "var(--blue)" }}
                      />
                    ) : (
                      <button className="btn-upload">Enviar</button>
                    )}
                  </UploadSection>
                </UploadFormat>

                <button
                  type="button"
                  className="button-add"
                  onClick={() => setInputIsActivetity((prevItem) => !prevItem)}
                >
                  <PlusOutlined
                    style={{ fontSize: 22, color: "var(--blue)" }}
                  />
                </button>
              </Wrapper>
            </WrapperProgress>
          </Header>

          {!load && attachments.length === 0 && (
            <WrapperWarning>
              <EyeInvisibleOutlined
                style={{ fontSize: 56, color: "var(--blue)" }}
              />

              <WarningText>Não há arquivos</WarningText>
            </WrapperWarning>
          )}

          {attachments.length > 0 && (
            <ListGrid>
              {attachments.map((attach, index) => {
                return (
                  <WrapperAttachments key={index}>
                    <img src={attach.url} alt="name" />

                    <AttachmentText>{attach.name}</AttachmentText>

                    <button onClick={() => handleDeleteAttachment(attach.name)}>
                      {deleteLoad && deleteId === attach.name ? (
                        <LoadingOutlined
                          style={{ fontSize: 24, color: "var(--blue)" }}
                        />
                      ) : (
                        <DeleteOutlined
                          style={{ fontSize: 18, color: "var(--red)" }}
                        />
                      )}
                    </button>
                  </WrapperAttachments>
                );
              })}
            </ListGrid>
          )}
        </Container>
      </NavBar>
    </Spin>
  );
};
