const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

// Routes
const questionRouter = require("./routes/question");
const categoryRouter = require("./routes/category");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/api/questions", questionRouter);
app.use("/api/category", categoryRouter);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const docsOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Examify API",
      version: "1.0.0",
      description:
        "Backend interview task to build a api that performs request for examination",
    },
    servers: [
      {
        url: `http://127.0.0.1:${process.env.PORT || 3333}`,
        description: "Development server",
      },
      {
        url: `http://examify.tech`,
        description: "Production server",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJSDoc(docsOptions);

app.use("/", swaggerUI.serve, swaggerUI.setup(specs));

module.exports = app;
