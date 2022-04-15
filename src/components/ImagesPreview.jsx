import React from "react";

export default function ImagesPreview() {
  return (
    <>
      <div className="flex flex-row items-center mt-8 gap-5">
        <div className="mainImg w-2/3 h-72 flex items-center">
          <img
            src="https://media.istockphoto.com/photos/ballroom-reflected-picture-id94330469?b=1&k=20&m=94330469&s=170667a&w=0&h=ZITCTlO4aMwaDBk47VeMgcy8_g1ArQRq6kZereKyJrU="
            className="w-full bg-cover rounded-lg"
          />
        </div>
        <div className="grid grid-rows-2 gap-4 h-72 items-center justify-center">
          <div className="grid grid-cols-2 gap-2">
            <img
              src="https://images.unsplash.com/photo-1549964336-96c968e00d5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
              alt="Image1"
              className="w-28 h-24 rounded-lg"
            />
            <img
              src="https://media.istockphoto.com/photos/empty-training-dancehall-with-yellow-walls-and-dark-wooden-floo-picture-id477003926?b=1&k=20&m=477003926&s=170667a&w=0&h=0GUpwgOfyMKIiUwvDFSesEzs5uSzZPthbhz_tzAIMgA="
              alt="Image1"
              className="w-28 h-24 rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://media.istockphoto.com/photos/wedding-birthday-reception-decoration-chairs-tables-and-flowers-picture-id681119612?b=1&k=20&m=681119612&s=170667a&w=0&h=IgDPYCXRKVjtcXN8V-pZzf6ASgeFPNwP22VIzyRsG9A="
              alt="Image1"
              className="w-28 h-24 bg-contain rounded-lg"
            />
            <div className="bg-slate-200 rounded-lg flex items-center justify-center w-28 h-24">
              <p className="text-sm text-slate-900 text-center my-auto">
                {" "}
                +15 Photos
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Preview Images --> */}
    </>
  );
}
