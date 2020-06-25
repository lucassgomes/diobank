import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import filesize from 'filesize';
import HeaderHome from '../../components/HeaderHome';
import api from '../../services/api';
import FileList from '../../components/FileList';
import Upload from '../../components/Upload';
import alert from '../../assets/alert.svg';
import { Container, Title, ImportFileContainer, Footer } from './styles';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

const Import: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  const history = useHistory();

  async function handleUpload(): Promise<void> {
    const data = new FormData();

    if (!uploadedFiles.length) return;


    const oneFile = uploadedFiles[0];

    data.append('file', oneFile.file, oneFile.name);

    try {
      await api.post('/transactions/import', data);
      history.push('/');
    } catch (err) {
       console.log(err.response.error);
    }
  }

  function submitFile(files: File[]): void {
    const uploadFiles = files.map(file => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
    }));
    console.log(uploadFiles);
    setUploadedFiles(uploadFiles);
  }

  return (
    <>
    <div className="background">
      <HeaderHome />
      <Container>
        <Title>Importar uma transação</Title>
        <ImportFileContainer>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <Footer>
            <p>
              <img src={alert} alt="Alert" />
              Permitido apenas arquivos CSV
            </p>
            <button onClick={handleUpload} type="button">
              Enviar
            </button>
          </Footer>
        </ImportFileContainer>
      </Container>
      </div>
    </>
  );
};

export default Import;
