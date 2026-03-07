import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

/**
 * Uploads a file to Cloudinary.
 * @param fileUri The URI of the file to upload (data URI, remote URL, or local path).
 * @param folder The folder to store the image in.
 */
export async function uploadImage(fileUri: string, folder: string = 'cgm_portal') {
    try {
        const result = await cloudinary.uploader.upload(fileUri, {
            folder,
            resource_type: 'auto',
        });
        return {
            success: true,
            url: result.secure_url,
            publicId: result.public_id,
        };
    } catch (error: any) {
        console.error('Cloudinary upload error:', error);
        return {
            success: false,
            error: error.message || 'Upload failed',
        };
    }
}

export default cloudinary;
