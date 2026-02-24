export default function Footer() {
    return (
      <footer className="bg-gray-200 py-16 px-8 text-sm text-gray-600">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h4 className="font-semibold mb-3">Categories</h4>
            <p>All Courses</p>
            <p>ICT</p>
            <p>Music</p>
          </div>
  
          <div>
            <h4 className="font-semibold mb-3">About</h4>
            <p>Our Instructors</p>
            <p>Terms of Service</p>
          </div>
  
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <p>FAQ</p>
            <p>Contact Support</p>
          </div>
  
          <div>
            <h4 className="font-semibold mb-3">Share</h4>
            <p>Facebook</p>
            <p>Twitter</p>
          </div>
        </div>
  
        <div className="text-center mt-10 text-xs">
          mentora.lk
        </div>
      </footer>
    );
  }
  