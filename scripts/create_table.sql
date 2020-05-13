CREATE TABLE mail_check_requests (
    id uuid,
    received_at timestamp,
    requested_at timestamp,
    requested_by text,
    recipient text,
    sender text,
    subject text,
    status text,
    rejected_status text,
    PRIMARY KEY(id)
);
