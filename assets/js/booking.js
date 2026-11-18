/* ==========================================================================
   PREMIUM X-RAY & SCAN CENTER - APPOINTMENT BOOKING CONTROLLER
   Form Validation, Indian Phone Regex, Date Restrictions & Confirmation States
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  const bookingForm = document.getElementById('appointmentForm');
  const serviceSelect = document.getElementById('bookService');
  const examSelect = document.getElementById('bookExam');
  const dateInput = document.getElementById('bookDate');
  const alertBox = document.getElementById('bookingAlert');

  // Examination types mapping by diagnostic category
  const examOptions = {
    'x-ray': [
      'Chest X-Ray (PA View)',
      'Chest X-Ray (PA & Lateral Views)',
      'Cervical / Lumbar Spine X-Ray',
      'Knee Joint X-Ray (AP & Lateral)',
      'Ankle & Foot X-Ray',
      'Panoramic Dental / Maxillofacial CBCT'
    ],
    'ultrasound': [
      'Whole Abdomen Ultrasound',
      'Pelvic & Lower Abdomen Ultrasound',
      'Obstetric 3D/4D Fetal Scan',
      'Color Doppler Carotid / Arterial',
      'Renal & KUB Ultrasound',
      'Thyroid / Neck High-Res Sonogram'
    ],
    'ecg': [
      'Standard 12-Lead Resting ECG',
      'Pre-Operative Cardiac Clearance ECG',
      '24-Hour Ambulatory Holter Monitoring',
      'Cardiac Rhythm Assessment'
    ],
    'package': [
      'Basic Digital Imaging Package',
      'Comprehensive Cardiac Assessment',
      'Executive Whole-Body Health Screening',
      'Senior Citizen Diagnostic Screening'
    ]
  };

  // Restrict past dates on date picker
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  // Cascading Dropdown: Update Examination options when Service changes
  if (serviceSelect && examSelect) {
    serviceSelect.addEventListener('change', function () {
      const selected = this.value;
      examSelect.innerHTML = '<option value="">-- Select Specific Examination --</option>';

      if (selected && examOptions[selected]) {
        examOptions[selected].forEach(exam => {
          const opt = document.createElement('option');
          opt.value = exam;
          opt.textContent = exam;
          examSelect.appendChild(opt);
        });
      }
    });
  }

  // Form Validation & Submission
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let isValid = true;
      const nameInput = document.getElementById('bookName');
      const phoneInput = document.getElementById('bookPhone');
      const emailInput = document.getElementById('bookEmail');
      const timeSelect = document.getElementById('bookTime');
      const consentCheckbox = document.getElementById('bookConsent');

      // Helper to set field status
      function validateField(input, condition) {
        if (!condition) {
          input.classList.add('is-invalid');
          isValid = false;
        } else {
          input.classList.remove('is-invalid');
        }
      }

      // Name validation (at least 2 letters)
      if (nameInput) {
        validateField(nameInput, nameInput.value.trim().length >= 2);
      }

      // Indian 10-digit mobile number validation (starts with 6,7,8,9)
      const indianPhoneRegex = /^[6-9]\d{9}$/;
      if (phoneInput) {
        const cleanPhone = phoneInput.value.replace(/[\s\-\+]/g, '').slice(-10);
        validateField(phoneInput, indianPhoneRegex.test(cleanPhone));
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput) {
        validateField(emailInput, emailRegex.test(emailInput.value.trim()));
      }

      // Service selection
      if (serviceSelect) {
        validateField(serviceSelect, serviceSelect.value !== '');
      }

      // Exam selection
      if (examSelect) {
        validateField(examSelect, examSelect.value !== '');
      }

      // Date selection
      if (dateInput) {
        validateField(dateInput, dateInput.value !== '');
      }

      // Time slot selection
      if (timeSelect) {
        validateField(timeSelect, timeSelect.value !== '');
      }

      // Consent checkbox
      if (consentCheckbox) {
        if (!consentCheckbox.checked) {
          consentCheckbox.focus();
          isValid = false;
        }
      }

      if (isValid) {
        // Generate verifiable request reference ID
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const refId = `XR-2026-${randomNum}`;

        if (alertBox) {
          alertBox.className = 'form-alert success';
          alertBox.innerHTML = `
            <strong><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="display:inline;vertical-align:middle;margin-right:6px"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Appointment Request Submitted!</strong><br>
            Reference Number: <span style="font-family:var(--font-heading);font-weight:800;letter-spacing:0.04em;">${refId}</span><br>
            Thank you, ${nameInput ? nameInput.value.trim() : 'Patient'}. Your appointment request for <strong>${examSelect.value}</strong> on <strong>${dateInput.value} (${timeSelect.value})</strong> has been received.<br>
            Our diagnostic patient coordinator will call you within 30 minutes to confirm your preparation guidelines and finalized appointment slot.
          `;
          alertBox.style.display = 'block';
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // Reset inputs
        bookingForm.reset();
      } else {
        if (alertBox) {
          alertBox.className = 'form-alert';
          alertBox.style.backgroundColor = '#FEF2F2';
          alertBox.style.color = '#991B1B';
          alertBox.style.border = '1px solid #FCA5A5';
          alertBox.innerHTML = `<strong>Please correct the highlighted fields</strong>: Ensure your 10-digit mobile number, full name, valid email, diagnostic service, and preferred date are selected correctly.`;
          alertBox.style.display = 'block';
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  }
});
