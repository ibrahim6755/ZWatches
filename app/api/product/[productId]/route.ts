import { connectDB } from "../../db/connectDB";
import Product from "../../models/product.model";
import { v2 as cloudinary } from "cloudinary";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  await connectDB();
  const productId = (await params).productId;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return Response.json({ message: "Product not found." }, { status: 400 });
    }

    return Response.json({ product }, { status: 200 });
  } catch {
    return Response.json({ messgae: "Something went wrong" }, { status: 400 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ productId: string }>  }
) {
  
  await connectDB();
  const productId =  (await params).productId;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return Response.json({ message: "Product not found" }, { status: 400 });
    }

    //delete the image in the coudinary

    const parts = product.image.split("/");
    const fileName = parts[parts.length - 1];
    const imageId = fileName.split(".")[0];

    cloudinary.uploader.destroy(`watches/${imageId}`).then((result) => {
      console.log("Result", result);
    });

    //delete from database
    await Product.findByIdAndDelete(productId);

    return Response.json(
      { message: "Product Deleted Successfully" },
      { status: 200 }
    );
  } catch {
    return Response.json({ message: "Something went wrong" }, { status: 400 });
  }
}
