import File from "../models/file.js";

export const uploadImage=async (req,res)=>{
    const fileObject={
        path:req.file.path,
        name:req.file.originalname
    }
    try {
     const file=await File.create(fileObject);
     res.status(200).json({path:`http://localhost:8000/file/${file._id}`});
    }
    catch (error) {
        console.log("Error while uploading the image",error.message);
        res.status(500).json("Error while uploading the image",error.message);
    }
}


export const downloadImage=async (req,res)=>{
    try {
        const file=await File.findById(req.params.fileId);
        if(!file){
            return res.status(404).json("File not found");
        }
        file.downloads++;
        await file.save();
        res.download(file.path,file.name);
    }
    catch (error) {
        console.log("Error while downloading the image",error.message);
        res.status(500).json("Error while downloading the image",error.message);
    }
}

