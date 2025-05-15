/**
 * NOW사전점검 랜딩페이지 JavaScript
 * 작성일: 2023
 * 설명: 아파트 입주 전 하자 점검 전문 업체 NOW사전점검 랜딩페이지 인터랙션
 */

document.addEventListener("DOMContentLoaded", function () {
  // 변수 선언
  const header = document.querySelector(".header");
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuCloseBtn = document.querySelector(".mobile-menu .close-btn");
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu ul li a");
  const scrollTopBtn = document.querySelector(".scroll-top");

  // 메인 슬라이더 변수
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentSlide = 0;
  let slideInterval;

  // 리뷰 슬라이더 변수
  const reviewSlides = document.querySelectorAll(".review-slide");
  const reviewDots = document.querySelectorAll(".review-dot");
  const reviewPrevBtn = document.querySelector(".review-prev");
  const reviewNextBtn = document.querySelector(".review-next");
  let currentReviewSlide = 0;
  let reviewInterval;

  // 폼 변수
  const contactForm = document.getElementById("consultationForm");

  // 헤더 스크롤 이벤트
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.style.padding = "10px 0";
    } else {
      header.style.padding = "15px 0";
    }
  });

  // 모바일 메뉴 토글
  mobileMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  mobileMenuCloseBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  // 모바일 메뉴 링크 클릭시 메뉴 닫기
  mobileMenuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });

  // 스크롤 탑 버튼
  scrollTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // 스크롤 이벤트에 따른 스크롤 탑 버튼 표시
  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      scrollTopBtn.style.opacity = "1";
    } else {
      scrollTopBtn.style.opacity = "0";
    }
  });

  // 메인 슬라이더 함수
  function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    currentSlide = (n + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // 메인 슬라이더 이벤트 리스너
  nextBtn.addEventListener("click", function () {
    clearInterval(slideInterval);
    nextSlide();
    startSlideInterval();
  });

  prevBtn.addEventListener("click", function () {
    clearInterval(slideInterval);
    prevSlide();
    startSlideInterval();
  });

  dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
      clearInterval(slideInterval);
      showSlide(index);
      startSlideInterval();
    });
  });

  // 메인 슬라이더 자동 재생
  function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  startSlideInterval();

  // 리뷰 슬라이더 함수
  function showReviewSlide(n) {
    reviewSlides.forEach((slide) => slide.classList.remove("active"));
    reviewDots.forEach((dot) => dot.classList.remove("active"));

    currentReviewSlide = (n + reviewSlides.length) % reviewSlides.length;

    reviewSlides[currentReviewSlide].classList.add("active");
    reviewDots[currentReviewSlide].classList.add("active");
  }

  function nextReviewSlide() {
    showReviewSlide(currentReviewSlide + 1);
  }

  function prevReviewSlide() {
    showReviewSlide(currentReviewSlide - 1);
  }

  // 리뷰 슬라이더 이벤트 리스너
  reviewNextBtn.addEventListener("click", function () {
    clearInterval(reviewInterval);
    nextReviewSlide();
    startReviewInterval();
  });

  reviewPrevBtn.addEventListener("click", function () {
    clearInterval(reviewInterval);
    prevReviewSlide();
    startReviewInterval();
  });

  reviewDots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
      clearInterval(reviewInterval);
      showReviewSlide(index);
      startReviewInterval();
    });
  });

  // 리뷰 슬라이더 자동 재생
  function startReviewInterval() {
    reviewInterval = setInterval(nextReviewSlide, 6000);
  }

  startReviewInterval();

  // 상담 신청 폼 제출
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // 폼 데이터 가져오기
      const formData = new FormData(contactForm);
      const formDataObj = {};

      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });

      // 여기에 실제 서버로 데이터를 보내는 코드 작성
      // 예: fetch API를 사용하여 서버로 데이터 전송

      // 임시 성공 메시지 표시
      alert("상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.");
      contactForm.reset();
    });
  }

  // 애니메이션 효과 (스크롤 시 요소 등장)
  const animatedElements = document.querySelectorAll(
    ".why-item, .timeline-item, .proud-item"
  );

  function checkScroll() {
    animatedElements.forEach(function (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight * 0.8) {
        element.classList.add("fadeIn");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // 초기 로드시 체크

  // 스무스 스크롤 구현
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
