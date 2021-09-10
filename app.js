const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

// Routes
const indexRouter = require("./routes");
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

app.use("/", indexRouter);
app.use("/api/question", questionRouter);
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

module.exports = app;
