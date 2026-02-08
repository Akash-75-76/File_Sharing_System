import File from "../models/file.js";

export const uploadImage=async (req,res)=>{
    const fileObject={
        path:req.file.location,  // S3 URL from multer-s3
        name:req.file.originalname
    }
    try {
     const file=await File.create(fileObject);
     const baseUrl = process.env.BASE_URL || `http://localhost:8000`;
     res.status(200).json({path:`${baseUrl}/file/${file._id}`});
    }
    catch (error) {
        console.log("Error while uploading the image",error.message);
        res.status(500).json({error:"Error while uploading the image", message:error.message});
    }
}


export const downloadImage=async (req,res)=>{
    try {
        const file=await File.findById(req.params.fileId);
        if(!file){
            return res.status(404).json({error:"File not found"});
        }
        file.downloads++;
        await file.save();
        // Redirect to S3 URL for download
        res.redirect(file.path);
    }
    catch (error) {
        console.log("Error while downloading the image",error.message);
        res.status(500).json({error:"Error while downloading the image", message:error.message});
    }
}

