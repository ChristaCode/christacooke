export default function ReviewsSection() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="review-item">
          <p>Alice Johnson: "Christa is an excellent developer! She delivered our project on time and exceeded expectations."</p>
          <span className="text-yellow-500">★★★★★</span>
        </div>
        <div className="review-item">
          <p>John Smith: "Christa's work was top-notch. Very professional and a pleasure to work with."</p>
          <span className="text-yellow-500">★★★★★</span>
        </div>
        <div className="review-item">
          <p>Emily Davis: "Amazing work! Christa went above and beyond to make sure everything was perfect."</p>
          <span className="text-yellow-500">★★★★★</span>
        </div>
      </div>
    );
  }
  