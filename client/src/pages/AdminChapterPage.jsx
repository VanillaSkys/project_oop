import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function AdminChapterPage() {
    const { cartoon } = useParams()
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        setSelectedFiles(Array.from(event.target.files));
    };

    const handleUpload = async () => {
        const formData = new FormData();

        selectedFiles.forEach(file => {
            formData.append('files[]', file);
            formData.append('name_cartoon', cartoon);
            formData.append('name_chapter', 'jong');
            formData.append('coin', 1);
        });

        try {
            await axios.post('/api/post_chapter', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            alert('Files uploaded successfully');
        } catch (error) {
            console.error('Error uploading files: ', error);
        }
    };
  return (
    <div>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
  )
}

export default AdminChapterPage