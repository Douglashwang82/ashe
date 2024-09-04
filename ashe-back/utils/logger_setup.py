# logger_setup.py
import logging
import colorlog

def setup_logger(name="my_flask_app"):
    logger = logging.getLogger(name)
    logger.setLevel(logging.DEBUG)

    # Attach color handler
    if not logger.handlers:
        handler = logging.StreamHandler()
        formatter = colorlog.ColoredFormatter(
            "%(log_color)s%(levelname)s:%(name)s:%(message)s",
            log_colors={
                'DEBUG': 'cyan',
                'INFO': 'green',
                'WARNING': 'yellow',
                'ERROR': 'red',
                'CRITICAL': 'bold_red',
            }
        )
        handler.setFormatter(formatter)
        logger.addHandler(handler)
    return logger
