import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';

// 🔑 Replace these 3 values with your EmailJS credentials
const SERVICE_ID  = 'service_yboac1m';
const TEMPLATE_ID = 'template_zbm2izr';
const PUBLIC_KEY  = 'VC-n6ePWoZr0AO48U';

const INITIAL = {
  from_name: '',
  phone:     '',
  email:     '',
  company:   '',
  city:      '',
  state:     '',
  message:   '',
};

export default function ContactForm() {
  const formRef               = useRef(null);
  const [formData, setFormData] = useState(INITIAL);
  const [status,   setStatus]   = useState('idle'); // idle | sending | success | error
  const [errors,   setErrors]   = useState({});

  // ── Validation ───────────────────────────────────────────
  function validate(data) {
    const e = {};
    if (!data.from_name.trim())                        e.from_name = 'Full name is required';
    if (!data.phone.trim())                            e.phone     = 'Phone number is required';
    else if (!/^\+?[\d\s\-]{7,15}$/.test(data.phone)) e.phone     = 'Enter a valid phone number';
    if (!data.email.trim())                            e.email     = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(data.email))        e.email     = 'Enter a valid email';
    if (!data.message.trim())                          e.message   = 'Message is required';
    return e;
  }

  // ── Handlers ─────────────────────────────────────────────
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // clear error on typing
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      setFormData(INITIAL);
      setErrors({});
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  }

  // ── Render ───────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div className={styles.successBox}>
        <div className={styles.successIcon}>✓</div>
        <h3 className={styles.successTitle}>Message Sent!</h3>
        <p className={styles.successText}>
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button className={styles.resetBtn} onClick={() => setStatus('idle')}>
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className={styles.form}>

      {/* Row 1 — Full Name + Phone */}
      <div className={styles.row}>
        <Field
          label="Full Name"
          name="from_name"
          type="text"
          placeholder="John Doe"
          value={formData.from_name}
          onChange={handleChange}
          error={errors.from_name}
          required
        />
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          required
        />
      </div>

      {/* Row 2 — Email + Company */}
      <div className={styles.row}>
        <Field
          label="Email Address"
          name="email"
          type="email"
          placeholder="john@company.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        <Field
          label="Company"
          name="company"
          type="text"
          placeholder="Acme Industries"
          value={formData.company}
          onChange={handleChange}
          error={errors.company}
        />
      </div>

      {/* Row 3 — City + State */}
      <div className={styles.row}>
        <Field
          label="City"
          name="city"
          type="text"
          placeholder="Mumbai"
          value={formData.city}
          onChange={handleChange}
          error={errors.city}
        />
        <Field
          label="State"
          name="state"
          type="text"
          placeholder="Maharashtra"
          value={formData.state}
          onChange={handleChange}
          error={errors.state}
        />
      </div>

      {/* Message */}
      <div className={styles.fieldGroup}>
        <label className={styles.label}>
          Message <span className={styles.required}>*</span>
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Describe your mixing requirement..."
          value={formData.message}
          onChange={handleChange}
          className={[styles.input, styles.textarea, errors.message ? styles.inputError : ''].join(' ')}
        />
        {errors.message && <span className={styles.errorText}>{errors.message}</span>}
      </div>

      {/* Error banner */}
      {status === 'error' && (
        <div className={styles.errorBanner}>
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        className={styles.submitBtn}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? (
          <span className={styles.spinner}>Sending…</span>
        ) : (
          'Send Message →'
        )}
      </button>

    </form>
  );
}

// ── Reusable Field sub-component ──────────────────────────
function Field({ label, name, type, placeholder, value, onChange, error, required }) {
  return (
    <div className={styles.fieldGroup}>
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={[styles.input, error ? styles.inputError : ''].join(' ')}
        autoComplete="off"
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}
