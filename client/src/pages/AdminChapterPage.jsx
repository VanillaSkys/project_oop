import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function AdminChapterPage() {
	const { cartoon } = useParams()
	const [nameChapter, setNameChapter] = useState('')
	const [coin, setCoin] = useState('')
	const [selectedFiles, setSelectedFiles] = useState([]);

	const handleFileChange = (event) => {
		setSelectedFiles(Array.from(event.target.files));
	};

	const handleUpload = async () => {
		const formData = new FormData();

		selectedFiles.forEach(file => {
			formData.append('files[]', file);
			formData.append('name_cartoon', cartoon);
			formData.append('name_chapter', nameChapter);
			formData.append('coin', coin);
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
	<div className="bg-gray-100 h-screen">
		<div>
			<Link to="/" className="text-center">
				{/* <img src="../../public/assets/image/left-arrow.png" className="object-contain" height={"10%"} width={"10%"} alt="" /> */}
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-10 h-10">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
				</svg>
			</Link>
		</div>
		<div className="flex justify-center items-center">
			<div className="w-[650px] textcenter bg-white p-2 rounded-md gap-4">
				<div>
					<p className="text-2xl text-center mt-2 mb-2">Add Cartoon Chapter</p>
				</div>
				<div className="mb-5">
					<label className="label">
						<span className="text-1xl text-black label-text">All Chapters</span>
					</label>
				</div>
				<div className="mb-5">
					<input onChange={(e) => setNameChapter(e.target.value)} />
				</div>
				<div className="mb-5">
					<input onChange={(e) => setCoin(e.target.value)} />
				</div>
				<div className="mb-5">
					<input type="file" multiple onChange={handleFileChange} />
				</div>
				<button className="bg-green-300 w-full rounded-md p-1 text-white" onClick={handleUpload}>Upload</button>
			</div>
		</div>
		
	</div>
  )
}

export default AdminChapterPage