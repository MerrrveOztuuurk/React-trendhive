describe("AuthForm Component - UI Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
  });

  //input doldurup submit etme
  const fillAndSubmit = (email: string, password: string) => {
    cy.get("form").should("exist");

    cy.get("input[type=email]").clear().type(email).should("have.value", email);
    cy.get("input[type=password]").clear().type(password).should("have.value", password);

    cy.get("button").contains("Login").should("exist").click();
  };

  it("başlık doğru görünüyor (Login)", () => {
    cy.contains("h2", "Login").should("be.visible");
  });

  it("kayıtlı kullanıcı email ve password inputlara yazabiliyor ve submit tıklanabiliyor", () => {
    fillAndSubmit("mrv@gmail.com", "12345");
    // Buton aktif mi 
    cy.get("button").contains("Login").should("not.be.disabled");
  });

  it("yanlış kullanıcı email ve password inputlara yazabiliyor ve submit tıklanabiliyor", () => {
    fillAndSubmit("wronguser@gmail.com", "wrongpassword");
    cy.get("button").contains("Login").should("not.be.disabled");
  });
});
